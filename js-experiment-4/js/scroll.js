const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

const sections = document.querySelectorAll("section")
const typeTag = document.querySelector("div.type")
const pageTag = document.querySelector("div.page")

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

// when we scroll, see how far down we've scrolled
// then for each section, change if passed
document.addEventListener("scroll", function() {
    const pixels = window.pageYOffset;

    sections.forEach(section => {
        if (pixels >= section.offsetTop - 60) {
            typeTag.innerHTML = section.getAttribute("data-type")
            pageTag.innerHTML = section.getAttribute("data-page")
        }
    })

})