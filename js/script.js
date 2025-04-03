document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");

    const showImages = () => {
        images.forEach((img) => {
            if (img.getBoundingClientRect().top < window.innerHeight - 50) {
                img.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showImages);
    showImages();
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});
