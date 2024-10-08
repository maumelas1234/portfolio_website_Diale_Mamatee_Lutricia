/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesParView: 2,
    },
  },
});

/*==================== FORM VALIDATION ====================*/
function validateForm() {
  var email = document.getElementById("email").value;
  var pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!pattern.test(email)) {
    alert("Please enter a valid Gmail address.");
    return false;
  }

  // Additional checks for disposable email domains
  var disposableDomains = [
    "mailinator.com",
    "mailin8r.com",
    "sogetthis.com",
    "mailinator.net",
    "spamherelots.com",
    "thisisnotmyrealemail.com",
    "mailinator2.com",
    "mailincubator.com",
    "guerrillamail.com",
    "temp-mail.org",
    "10minutemail.net",
    "dispostable.com",
    "mailnesia.com",
    "getnada.com",
    "tempmailaddress.com",
    "fake-mail.com",
    "discardmail.com",
    "mail.ru",
    "maildrop.cc",
  ]; // Add more domains as needed
  var domain = email.split("@")[1];
  if (disposableDomains.includes(domain)) {
    alert("Please use a non-disposable email address.");
    return false;
  }

  return true;
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
   const nav = document.getElementById('header')
   // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
   if (this.scrollY >= 80) nav.classList.add('scroll-header');
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


const skillsForm = document.getElementById("skills-form");
const skillNameInput = document.getElementById("skill-name");
const skillPercentageInput = document.getElementById("skill-percentage");
const skillsList = document.getElementById("skills-list");

// Initial skills data
let skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 70 },
    { name: "React", percentage: 60 },
    { name: "PHP", percentage: 80 },
    { name: "Node.js", percentage: 70 },
    { name: "Python", percentage: 95 },
];

let editIndex = -1; // Variable to track which skill is being edited

// Function to render skills
function renderSkills() {
    skillsList.innerHTML = ""; // Clear the list
    skills.forEach((skill, index) => {
        const skillItem = document.createElement("div");
        skillItem.className = "skills__item";
        skillItem.innerHTML = `
            <div>
                <h3>${skill.name}</h3>
                <span>${skill.percentage}%</span>
                <div class="skills__bar">
                    <span class="skills__percentage" style="width: ${skill.percentage}%;"></span>
                </div>
            </div>
            <div>
                <button onclick="editSkill(${index})">Edit</button>
                <button onclick="deleteSkill(${index})">Delete</button>
            </div>
        `;
        skillsList.appendChild(skillItem);
    });
}

// Add or update skill
skillsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const skillName = skillNameInput.value.trim();
    const skillPercentage = Number(skillPercentageInput.value);

    // Check for valid input
    if (skillName === "" || isNaN(skillPercentage) || skillPercentage < 0 || skillPercentage > 100) {
        alert("Please enter a valid skill name and percentage between 0 and 100.");
        return;
    }

    // Check if editing an existing skill
    if (editIndex > -1) {
        skills[editIndex] = { name: skillName, percentage: skillPercentage }; // Update existing skill
        editIndex = -1; // Reset edit index
    } else {
        skills.push({ name: skillName, percentage: skillPercentage }); // Add new skill
    }

    // Reset form
    skillNameInput.value = "";
    skillPercentageInput.value = "";
    renderSkills(); // Render updated skills list
});

// Edit skill
function editSkill(index) {
    const skill = skills[index];
    skillNameInput.value = skill.name; // Populate the input fields with skill data
    skillPercentageInput.value = skill.percentage;
    editIndex = index; // Set edit index to track which skill is being edited
}

// Delete skill
function deleteSkill(index) {
    skills.splice(index, 1); // Remove skill from the array
    renderSkills(); // Render updated skills list
}

// Initial rendering
renderSkills();



// Function to render skills
function renderSkills() {
  skillsList.innerHTML = ""; // Clear the list
  skills.forEach((skill, index) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skills__item";
      skillItem.innerHTML = `
          <div>
              <h3>${skill.name}</h3>
              <span>${skill.percentage}%</span>
              <div class="skills__bar">
                  <span class="skills__percentage" style="width: ${skill.percentage}%;"></span>
              </div>
          </div>
          <div>
              <button class="edit-button" onclick="editSkill(${index})">Edit</button>
              <button class="delete-button" onclick="deleteSkill(${index})">Delete</button>
          </div>
      `;
      skillsList.appendChild(skillItem);
  });
}
