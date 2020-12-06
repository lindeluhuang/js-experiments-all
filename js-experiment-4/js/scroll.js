const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

// when scrolling page, update pixels tag into how far scrolled
document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset;
    pixelsTag.innerHTML = pixels;
})

// when scroll page, make progress bar that keeps track of distance
document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;
    const percentScrolled = pixels / totalScrollableDistance * 100;

    progressTag.style.width = percentScrolled + "%";
})