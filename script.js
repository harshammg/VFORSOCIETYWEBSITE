window.addEventListener("scroll", () => {
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach(fadeIn => {
        const fadeInTop = fadeIn.getBoundingClientRect().top;
        const fadeInPoint = window.innerHeight / 1.3;

        if (fadeInTop < fadeInPoint) {
            fadeIn.classList.add("visible");
        }
    });
});
