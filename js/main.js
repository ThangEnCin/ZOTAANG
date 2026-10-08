const menuToggle =
  document.querySelector(".menu-toggle");

const mainNav =
  document.querySelector("#mainNav");


if (
  menuToggle &&
  mainNav
) {

  menuToggle.addEventListener(
    "click",
    () => {

      const open =
        mainNav.classList.toggle(
          "open"
        );

      menuToggle.setAttribute(
        "aria-expanded",
        String(open)
      );

      menuToggle.textContent =
        open ? "✕" : "☰";

    }
  );

}


const year =
  document.querySelector("#year");


if (year) {

  year.textContent =
    new Date().getFullYear();

}
