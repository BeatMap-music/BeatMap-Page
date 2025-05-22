document.addEventListener("DOMContentLoaded", () => {
    // Lleva la página arriba al recargar
    window.scrollTo(0, 0);

    // -------- Botón “Ver más” --------
    document.getElementById("btnVerMas").addEventListener("click", (e) => {
        const target  = document.getElementById("modules");
        const yOffset = -80;                         // alto del header
        const y       = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    });

    // -------- IntersectionObserver --------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((ent) => {
            if (ent.isIntersecting) {
                ent.target.classList.add("visible");
                observer.unobserve(ent.target);
            }
        });
    }, { threshold: 0.2 });

    /* 1) Tarjetas de *cualquier* sección que usen la animación */
    document
        .querySelectorAll(".module-item, .about-item")   // ¡añadimos .about-item!
        .forEach(el => observer.observe(el));

    /* 2) Todos los títulos .section-title */
    document
        .querySelectorAll(".section-title")
        .forEach(el => observer.observe(el));
});