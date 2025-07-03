window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelectorAll("#switch");
  const toggle = document.getElementById("clickToggle");
  btn.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "🌚";
      } else {
        btn.textContent = "☀️";
      }
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
