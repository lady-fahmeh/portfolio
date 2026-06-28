import {
  profileData,
  experienceData,
  projectData,
  skillsData,
} from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1,
  });

  const elementsToAnimate = document.querySelectorAll(".js-scroll");
  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });

  document.getElementById("title").textContent =
    profileData.name + " — Portfolio";

  const heroExtra = profileData.imageUrl
    ? `<img src="${profileData.imageUrl}" alt="${profileData.name}" class="personal-image animate__animated animate__zoomIn">`
    : `<div class="hero-panel animate__animated animate__fadeInRight" style="animation-delay: 0.6s;">
           <h3>Professional focus</h3>
           <p>A product-aware backend developer who designs stable systems, scalable APIs, and team-ready delivery plans.</p>
           <ul>
             <li>Backend architecture & API design</li>
             <li>Requirements analysis & team alignment</li>
             <li>CI/CD, monitoring & process stability</li>
           </ul>
         </div>`;

  document.getElementById("header").innerHTML = `
    <div class="header-grid">
      <div class="hero-copy">
        <span class="hero-eyebrow">${profileData.role}</span>
        <h1 class="animate__animated animate__fadeInDown">Hi, I'm ${profileData.name}</h1>
        <p class="animate__animated animate__fadeInDown" style="animation-delay: 0.4s;">
          ${profileData.summary}
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn animate__animated animate__fadeInUp" style="animation-delay: 0.8s;">Contact</a>
          <a href="#projects" class="btn btn-secondary animate__animated animate__fadeInUp" style="animation-delay: 1s;">Work</a>
        </div>
      </div>
      ${heroExtra}
    </div>`;

  // Education
  const educationMarkup = Array.isArray(profileData.education)
    ? profileData.education
        .map(
          (edu) => `
          <div class="education-entry">
            <h3>${edu.degree}</h3>
            <p class="education-meta">${edu.school} | ${edu.years}</p>
            <p>Status: ${edu.status}</p>
          </div>`,
        )
        .join("")
    : `
      <div class="education-entry">
        <h3>${profileData.education.degree}</h3>
        <p class="education-meta">${profileData.education.school} | ${profileData.education.years}</p>
        <p>Status: ${profileData.education.status}</p>
      </div>`;

  document.getElementById("education-content").innerHTML = educationMarkup;

  const certificationsMarkup =
    profileData.certifications && profileData.certifications.length
      ? profileData.certifications
          .map(
            (cert) => `
            <div class="certification-entry">
              <div class="certification-header">
                <h3><a href="${cert.link}" target="_blank">${cert.title}</a></h3>
                <p class="certification-meta">
                  <a href="${cert.organizationUrl}" target="_blank">${cert.organization}</a>
                  <span>• ${cert.period}</span>
                </p>
              </div>
              <div class="certification-details">
                ${cert.details.map((detail) => `<p>${detail}</p>`).join("")}
              </div>
            </div>`,
          )
          .join("")
      : "<p>No certifications added yet.</p>";

  document.getElementById("certifications-content").innerHTML =
    certificationsMarkup;

  // Contact
  document.getElementById("contact-content").innerHTML = `
    <p>I'm currently seeking new opportunities. Feel free to reach out!</p>
    <a href="mailto:${profileData.contactEmail}" class="btn js-scroll">Email</a>
     <a href="mailto:${profileData.linkedIn}" class="btn js-scroll">LinkedIn</a>`;

  document.getElementById("footer").innerHTML = `<p>${profileData.footer}</p>`;
  window.addSkillItem = (item) => {
    const skillsList = document.querySelector(".skills-list");
    if (!skillsList) return;

    const skillGroup = document.createElement("div");
    skillGroup.classList.add("skill-group", "js-scroll");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    skillGroup.appendChild(h3);

    const ul = document.createElement("ul");
    item.skills.forEach((skill) => {
      const li = document.createElement("li");
      li.textContent = skill;
      ul.appendChild(li);
    });
    skillGroup.appendChild(ul);

    skillsList.appendChild(skillGroup);
    observer.observe(skillGroup);
  };

  window.addExperienceItem = (item) => {
    const experienceList = document.querySelector(".experience-list");
    if (!experienceList) {
      console.error("Experience list container not found.");
      return;
    }

    const experienceItem = document.createElement("div");
    experienceItem.classList.add("experience-item", "js-scroll");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    experienceItem.appendChild(h3);

    const pMeta = document.createElement("p");
    pMeta.classList.add("experience-meta");
    pMeta.textContent = item.meta;
    experienceItem.appendChild(pMeta);

    const ul = document.createElement("ul");
    item.duties.forEach((duty) => {
      const li = document.createElement("li");
      li.textContent = duty;
      ul.appendChild(li);
    });
    experienceItem.appendChild(ul);

    experienceList.appendChild(experienceItem);

    observer.observe(experienceItem);
  };

  window.addProjectItem = (item) => {
    const projectGrid = document.querySelector(".project-grid");
    if (!projectGrid) {
      console.error("Project grid container not found.");
      return;
    }

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card", "js-scroll");

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    projectCard.appendChild(h3);

    const pDesc = document.createElement("p");
    pDesc.textContent = item.description;
    projectCard.appendChild(pDesc);

    const techTagsDiv = document.createElement("div");
    techTagsDiv.classList.add("tech-tags");
    item.technologies.forEach((tech) => {
      const span = document.createElement("span");
      span.textContent = tech;
      techTagsDiv.appendChild(span);
    });
    projectCard.appendChild(techTagsDiv);

    if (item.googlePlayUrl || item.appStoreUrl) {
      const storeWrapper = document.createElement("div");
      storeWrapper.classList.add("project-footer");

      if (item.googlePlayUrl) {
        const gpBtn = document.createElement("a");
        gpBtn.href = item.googlePlayUrl;
        gpBtn.textContent = "Google Play";
        gpBtn.classList.add("btn", "store-btn");
        gpBtn.target = "_blank";
        storeWrapper.appendChild(gpBtn);
      }

      if (item.appStoreUrl) {
        const iosBtn = document.createElement("a");
        iosBtn.href = item.appStoreUrl;
        iosBtn.textContent = "App Store";
        iosBtn.classList.add("btn", "store-btn");
        iosBtn.target = "_blank";
        storeWrapper.appendChild(iosBtn);
      }

      projectCard.appendChild(storeWrapper);
    }
    if (item.website) {
      const websiteWrapper = document.createElement("div");
      websiteWrapper.classList.add("project-footer");
      const visitBtn = document.createElement("a");
      visitBtn.href = item.website;
      visitBtn.textContent = "Visit";
      visitBtn.classList.add("btn", "store-btn");
      visitBtn.target = "_blank";
      websiteWrapper.appendChild(visitBtn);
      projectCard.appendChild(websiteWrapper);
    }

    projectGrid.appendChild(projectCard);
    observer.observe(projectCard);
  };

  experienceData.forEach((item) => {
    window.addExperienceItem(item);
  });

  projectData.forEach((item) => {
    window.addProjectItem(item);
  });
  skillsData.forEach((item) => window.addSkillItem(item));
});
