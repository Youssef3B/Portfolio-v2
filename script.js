function openModal(cardIndex) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  var modalTitle = document.getElementById("modalTitle");
  var modalDescription = document.getElementById("modalDescription");
  var modalButton = document.getElementById("modalButton");

  // Set the content of the modal based on the clicked card
  switch (cardIndex) {
    case 1:
      modalImage.src = "projects/8.jpg";
      modalTitle.innerText = "Freelance Web Site";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Front-end-bricool/')"
      );
      break;
    // Add cases for other cards here
    case 2:
      modalImage.src = "projects/1.jpg";
      modalTitle.innerText = "Web site with tailwind css";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/My-First-Design-With-Tailwind-css/')"
      );

      break;
    case 3:
      modalImage.src = "projects/22.jpg";
      modalTitle.innerText = "Swipy";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://joyful-chimera-2b2203.netlify.app/')"
      );

      break;
    // Add cases for other cards here
    case 4:
      modalImage.src = "projects/21.jpg";
      modalTitle.innerText = "Rework Web Site Ebf";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://ebf.netlify.app/index.html')"
      );

      break;
    case 5:
      modalImage.src = "projects/20.jpg";
      modalTitle.innerText = "Portfolio With React Js And FireBase";
      modalDescription.innerText = "Dynamic Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://3byoussef.netlify.app/')"
      );

      break;
    case 6:
      modalImage.src = "projects/19.jpg";
      modalTitle.innerText = "Flex it";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Flex-It-Responsive-web-site-with-dark-mode-and-light-mode/#')"
      );

      break;
    case 7:
      modalImage.src = "projects/13.jpg";
      modalTitle.innerText = "E-commerce Web Site";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/web-site-store/')"
      );

      break;
    case 8:
      modalImage.src = "projects/16.jpg";
      modalTitle.innerText = "Photographer Web Site";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/My-first-boostrap-web-site/')"
      );

      break;
    case 9:
      modalImage.src = "projects/17.jpg";
      modalTitle.innerText = "Rework Trello";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Trello-Responsive/')"
      );

      break;
    case 10:
      modalImage.src = "projects/2.jpg";
      modalTitle.innerText = "image editor";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Image-Editor/')"
      );

      break;
    case 11:
      modalImage.src = "projects/3.jpg";
      modalTitle.innerText = "words game";

      modalDescription.innerText = "app";

      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Word-Scramble-Game/')"
      );

      break;
    case 12:
      modalImage.src = "projects/4.jpg";
      modalTitle.innerText = "tic tac toe game with ai";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Tic-Tac-Toe-Javascript/')"
      );

      break;
    case 13:
      modalImage.src = "projects/5.jpg";
      modalTitle.innerText = "rock paper scissors Game";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Rock-Scissors-Paper-Game/')"
      );

      break;
    case 14:
      modalImage.src = "projects/6.jpg";
      modalTitle.innerText = "Memory Game";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Memory-Game/')"
      );

      break;
    case 15:
      modalImage.src = "projects/7.jpg";
      modalTitle.innerText = "Quiz Game";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Quiz-Game/')"
      );

      break;
    case 16:
      modalImage.src = "projects/9.jpg";
      modalTitle.innerText = "To Uppercase or to lower case";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Convert-Case-/')"
      );

      break;
    case 17:
      modalImage.src = "projects/10.jpg";
      modalTitle.innerText = "crud";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/CRUDS-project/')"
      );

      break;
    case 18:
      modalImage.src = "projects/11.jpg";
      modalTitle.innerText = "Country Api";
      modalDescription.innerText = "api";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/COUNTRY/')"
      );
      break;
    case 19:
      modalImage.src = "projects/12.jpg";
      modalTitle.innerText = "Random memes";
      modalDescription.innerText = "app";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/Memes-app/')"
      );

      break;
    case 22:
      modalImage.src = "projects/18.jpg";
      modalTitle.innerText = "san fransisco";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/My-First-Responsive-web-site/')"
      );

      break;
    case 23:
      modalImage.src = "projects/23.jpg";
      modalTitle.innerText = "Football Chat";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://football07.netlify.app/')"
      );

      break;
    case 24:
      modalImage.src = "projects/24.jpg";
      modalTitle.innerText = "Mediora Agency";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://mediora08.netlify.app/')"
      );

      break;
    case 25:
      modalImage.src = "projects/25.jpg";
      modalTitle.innerText = "Movix App";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://movix-app7.netlify.app/')"
      );

      break;
    case 26:
      modalImage.src = "projects/26.jpg";
      modalTitle.innerText = "N Splity App";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://nsplit.netlify.app/')"
      );

      break;
    case 27:
      modalImage.src = "projects/27.jpg";
      modalTitle.innerText = "Kayley Consulting";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/end-kayel10/index.html')"
      );

      break;
    case 28:
      modalImage.src = "projects/28.jpg";
      modalTitle.innerText = "Far Away";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://travellist07.netlify.app/')"
      );

      break;
    case 29:
      modalImage.src = "projects/29.jpg";
      modalTitle.innerText = "Dashboard Mediora";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://youssef3b.github.io/FINAL-DASH/index.html')"
      );

      break;
    case 30:
      modalImage.src = "projects/30.jpg";
      modalTitle.innerText = "Pizza ordering App";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://pizza-react-app7.netlify.app/menu')"
      );

      break;
    case 31:
      modalImage.src = "projects/31.jpg";
      modalTitle.innerText = "Power Fleet ";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://powerfleet08.netlify.app/')"
      );

      break;
    case 32:
      modalImage.src = "projects/32.jpg";
      modalTitle.innerText = "Kesbaah Cafe";
      modalDescription.innerText = "Static Website";
      modalButton.setAttribute(
        "onclick",
        "openLink('https://www.kasbahcafemarrakech.com/')"
      );

      break;
  }

  modal.style.display = "block";
}
function openLink(link) {
  window.open(link, "_blank");
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Add event listener to the document
let modal = document.getElementById("myModal");
let content = document.getElementById("content");

content.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the modal
});

modal.addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

var navItems = document.querySelectorAll("#nav li");
var sections = document.querySelectorAll("section");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove the "active" class from all items
    navItems.forEach(function (navItem) {
      navItem.querySelector("a").classList.remove("active");
    });

    // Add the "active" class to the clicked item
    item.querySelector("a").classList.add("active");
  });
});

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scrolling and activation of the corresponding <li> element
function handleScroll() {
  sections.forEach(function (section) {
    var sectionId = section.getAttribute("id");
    var correspondingNavItem = document.querySelector(
      'a[href="#' + sectionId + '"]'
    );

    if (correspondingNavItem) {
      var parentItem = correspondingNavItem.parentNode;
      if (isInViewport(section)) {
        navItems.forEach(function (navItem) {
          navItem.querySelector("a").classList.remove("active");
        });
        correspondingNavItem.classList.add("active");
      } else {
        parentItem.classList.remove("active");
      }
    }
  });
}

// Event listener for scrolling
window.addEventListener("scroll", handleScroll);

// Function to toggle dark mode
const darkModeToggle = document.getElementById("dark-mode");

darkModeToggle.onclick = function () {
  document.body.classList.toggle("light-theme");
  saveThemePreference();
  applySavedThemePreference(); // Call the function to apply the saved theme preference
};

// Function to save the selected theme preference
function saveThemePreference() {
  const isLightTheme = document.body.classList.contains("light-theme");
  localStorage.setItem("theme", isLightTheme ? "light" : "dark");
}

// Function to apply the user's saved theme preference
function applySavedThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    changeParticleColor("#000"); // Call the function to change particle color
  } else {
    document.body.classList.remove("light-theme");
    changeParticleColor("#fff"); // Call the function to change particle color
  }
}

// Function to change the particle color
function changeParticleColor(color) {
  const particles = window.particlesJS;
  if (particles) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 1100,
          },
        },
        color: {
          value: color,
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
  }
}

// Function to save the selected color preference
function saveColorPreference(color) {
  localStorage.setItem("color", color);
}

// Function to apply the user's saved color preference
function applySavedColorPreference() {
  const savedColor = localStorage.getItem("color");
  if (savedColor) {
    const body = document.body;
    body.classList.remove("bllu", "redd", "greenn", "orangee");
    body.classList.add(savedColor);

    const avatar = document.getElementById("avatar");
    let imageSrc;

    switch (savedColor) {
      case "bllu":
        imageSrc = "imgs/blue.png";
        break;
      case "redd":
        imageSrc = "imgs/red.png";
        break;
      case "greenn":
        imageSrc = "imgs/home.png";
        break;
      case "orangee":
        imageSrc = "imgs/orange.png";
        break;
      default:
        imageSrc = "imgs/home.png"; // Default image if color preference is not found
        break;
    }

    avatar.src = imageSrc;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Apply the saved theme preference
  applySavedThemePreference();

  var blue = document.getElementById("blue");
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var orange = document.getElementById("orange");

  blue.addEventListener("click", function () {
    document.body.classList.remove("redd", "greenn", "orangee");
    document.body.classList.add("bllu");
    saveColorPreference("bllu");
    const avatar = document.getElementById("avatar");
    avatar.src = "imgs/blue.png";
  });

  red.addEventListener("click", function () {
    document.body.classList.remove("bllu", "greenn", "orangee");
    document.body.classList.add("redd");
    saveColorPreference("redd");
    const avatar = document.getElementById("avatar");
    avatar.src = "imgs/red.png";
  });

  green.addEventListener("click", function () {
    document.body.classList.remove("redd", "bllu", "orangee");
    document.body.classList.add("greenn");
    saveColorPreference("greenn");
    const avatar = document.getElementById("avatar");
    avatar.src = "imgs/home.png";
  });

  orange.addEventListener("click", function () {
    document.body.classList.remove("redd", "bllu", "greenn");
    document.body.classList.add("orangee");
    saveColorPreference("orangee");
    const avatar = document.getElementById("avatar");
    avatar.src = "imgs/orange.png";
  });

  // Apply the saved color preference
  applySavedColorPreference();
});

const ballon = document.getElementById("ballon");
const bgColors = document.getElementById("bgcolors");

ballon.addEventListener("click", function () {
  if (bgColors.classList.contains("show")) {
    bgColors.classList.remove("show");
  } else {
    bgColors.classList.add("show");
  }
});
