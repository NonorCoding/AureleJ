/*------------------------------LOADER------------------------------*/

const loader = document.querySelector(".loader-wrapper");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  document.querySelector("body").style.overflow = "hidden";
  setTimeout(() => {
    document.querySelector("body").style.overflow = "";
  loader.style.display = "none";
    console.log("page loaded");
  }, 3400);

  LOADER();
  console.log("loading...");
});

function LOADER() {
  /*------------------------------CURSOR------------------------------*/

  // Cursor tarcker

  const cursorDot = document.querySelector(".cursor-dot");
  const cursor = document.querySelector(".cursor");
  const anchor = document.querySelectorAll("a");

  window.addEventListener("mousemove", function (e) {
    cursorDot.style.top = e.y + "px";
    cursorDot.style.left = e.x + "px";

    cursor.style.top = e.y + "px";
    cursor.style.left = e.x + "px";
  });

  anchor.forEach((anc) => {
    anc.addEventListener("mouseover", () => {
      cursorDot.classList.add("hover");
      cursor.style.display = "none";

      cursor.style.top = anc.getBoundingClientRect().top + "px";
      cursor.style.left = anc.getBoundingClientRect().left + "px";
    });
    anc.addEventListener("mouseleave", () => {
      cursorDot.classList.remove("hover");
      cursor.style.display = "";
    });
  });

  /*------------------------------MENU------------------------------*/

  // Menu button

  const menuButton = document.querySelector(".menu-button");

  const littleSquare = document.querySelectorAll(".little-square");
  const bigSquare = document.querySelector(".big-square");

  let activeButton = true;

  function activeButtonClickOn() {
    document.querySelector(".menu-slider").style.display = "flex";

    setTimeout(() => {
      document.querySelector(".menu-slider").style.opacity = 1;
    }, 1);

    littleSquare[0].classList.add("active");
    littleSquare[1].classList.add("active");

    bigSquare.classList.add("active");

    activeButton = false;
  }

  function activeButtonClickOff() {
    document.querySelector(".menu-slider").style.opacity = 0;

    setTimeout(() => {
      document.querySelector(".menu-slider").style.display = "none";
    }, 400);

    littleSquare[0].classList.remove("active");
    littleSquare[1].classList.remove("active");

    bigSquare.classList.remove("active");
    activeButton = true;
  }

  menuButton.addEventListener("click", () => {
    if (activeButton === true) {
      activeButtonClickOn();
    } else {
      activeButtonClickOff();
    }
  });

  const menuLinks = document.querySelectorAll(".menu-links");

  menuLinks.forEach((links) => {
    links.addEventListener("click", () => {
      activeButtonClickOff();
    });
  });

  let modeActive = true;
  let langageActive = true;

  const lightMode = document.querySelector(".light-mode");
  const darkMode = document.querySelector(".dark-mode");

  const frenchLangage = document.querySelector(".french");
  const englishLangage = document.querySelector(".english");

  document.querySelector(".page-mode").addEventListener("click", () => {
    if (modeActive === true) {
      lightMode.classList.add("mode-unactive");
      darkMode.classList.remove("mode-unactive");
      darkMode.classList.add("mode-active");
      lightMode.classList.remove("mode-active");
      modeActive = false;
    } else {
      lightMode.classList.add("mode-active");
      darkMode.classList.remove("mode-active");
      darkMode.classList.add("mode-unactive");
      lightMode.classList.remove("mode-unactive");
      modeActive = true;
    }
  });

  document.querySelector(".page-langage").addEventListener("click", () => {
    if (langageActive === true) {
      frenchLangage.classList.add("mode-unactive");
      englishLangage.classList.remove("mode-unactive");
      englishLangage.classList.add("mode-active");
      frenchLangage.classList.remove("mode-active");
      langageActive = false;
    } else {
      frenchLangage.classList.add("mode-active");
      englishLangage.classList.remove("mode-active");
      englishLangage.classList.add("mode-unactive");
      frenchLangage.classList.remove("mode-unactive");
      langageActive = true;
    }
  });

  const home = document.querySelector(".home");
  const homeBackground = document.querySelector(".home-img-background");
  const bodyPage = document.querySelector("body");

  window.addEventListener("scroll", () => {
    var scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    var pos = window.innerHeight;

    if (scroll < pos) {
      home.style.position = "fixed";
      home.style.top = "0px";
    } else {
      home.style.position = "relative";
      home.style.top = pos + "px";
    }

    home.style.padding = Math.max(0, Math.min(20, scroll / (pos / 20))) + "px";
    homeBackground.style.borderRadius =
      Math.max(0, Math.min(20, scroll / (pos / 20))) + "px";

    document.documentElement.style.setProperty("--project-top", pos * 2 + "px");

    const pageContent = [...document.querySelectorAll(".page-content-pos")];

    const data = pageContent.map(
      (pageContent) => pageContent.getBoundingClientRect().top - pos
    );
    // console.log(data);

    // console.log(menuLinks);

    // if (data[0] < 0)
  });
}
