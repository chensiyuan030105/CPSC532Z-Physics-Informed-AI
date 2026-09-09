document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const menuButton = document.querySelector(".menu-toggle");
  const mobileNavigation = document.querySelector(".mobile-nav");
  const searchButton = document.querySelector(".search-toggle");
  const searchForm = document.querySelector(".site-search");

  menuButton?.addEventListener("click", () => {
    const willOpen = mobileNavigation.hasAttribute("hidden");
    mobileNavigation.toggleAttribute("hidden", !willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
  });

  searchButton?.addEventListener("click", () => {
    searchForm.removeAttribute("hidden");
    searchForm.querySelector("input")?.focus();
  });

  searchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = new FormData(searchForm).get("query")?.toString().trim().toLowerCase();

    if (query?.includes("schedule") || query?.includes("unit")) {
      window.location.href = "schedule.html";
    } else if (query?.includes("syllabus") || query?.includes("grading") || query?.includes("project")) {
      window.location.href = "syllabus.html";
    } else {
      window.location.href = "index.html";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchForm?.setAttribute("hidden", "");
      mobileNavigation?.setAttribute("hidden", "");
      menuButton?.setAttribute("aria-expanded", "false");
    }
  });
});
