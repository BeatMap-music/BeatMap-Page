document.addEventListener("DOMContentLoaded", () => {

    const toggle    = document.getElementById("bmToggle");
    const container = document.querySelector(".bm-container");
    const dropdown  = document.getElementById("bmDropdown");

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        container.classList.toggle("open");
    });

    dropdown.querySelectorAll(".bm-link, .bm-btn").forEach(el =>
        el.addEventListener("click", () => container.classList.remove("open"))
    );

    document.addEventListener("click", (e) => {
        if (container.classList.contains("open")) {

            const isInside =
                container.contains(e.target) ||
                dropdown.contains(e.target);
            if (!isInside) {
                container.classList.remove("open");
            }

        }
    });

});