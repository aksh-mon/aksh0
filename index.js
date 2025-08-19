window.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".switch");
  const toggle = document.getElementById("clickToggle");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Update ALL toggle buttons to the same state
      btns.forEach((b) => {
        if (document.body.classList.contains("dark-mode")) {
          b.textContent = "🌚";
        } else {
          b.textContent = "☀️";
        }
      });
    });
  });

  toggle.addEventListener("click", () => {
    const navSm = document.getElementById("navSm");

    const isVisible = navSm.style.visibility === "visible";
    toggle.classList.toggle("active");
    navSm.classList.toggle("show");
    if (isVisible) {
      navSm.style.visibility = "hidden";
      toggle.innerText = "☰"; // Hamburger icon
    } else {
      navSm.style.visibility = "visible";
      toggle.innerText = "🞬"; // Close icon
    }
  });
});
