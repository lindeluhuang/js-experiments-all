const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

const headerTag = document.querySelector("header")

const sections = document.querySelectorAll("section")
const typeTag = document.querySelector("div.type")
const pageTag = document.querySelector("div.page")

// when scrolling page, update pixels tag into how far scrolled
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;
    pixelsTag.innerHTML = pixels;
})

// when scroll page, make progress bar that keeps track of distance
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;
    const pageHeight = bodyTag.getBoundingClientRect().height;
    const totalScrollableDistance = pageHeight - window.innerHeight;
    const percentScrolled = pixels / totalScrollableDistance * 100;

    progressTag.style.width = percentScrolled + "%";
})

// when we scroll, see how far down we've scrolled
// then for each section, change if passed
document.addEventListener("scroll", function () {
    const pixels = window.pageYOffset;

    sections.forEach(section => {
        if (pixels >= section.offsetTop - 60) {
            typeTag.innerHTML = section.getAttribute("data-type")
            pageTag.innerHTML = section.getAttribute("data-page")

            if (section.hasAttribute("data-is-dark")) {
                headerTag.classList.add("white");
                progressTag.classList.add("white");
            } else {
                headerTag.classList.remove("white");
                progressTag.classList.remove("white");
            }
        }
    })
})

// when scroll, make things parallax 
// move certain tags based off how far they are from anchor point
// anchor point = middle of section
// how far to parallax? ratio of middle (not top) scrolled to parallax to anchor
document.addEventListener("scroll", function () {
    const topViewport = window.pageYOffset;
    const midViewport = topViewport + (window.innerHeight/2);

    sections.forEach(section => {
        const topSection = section.offsetTop;
        const midSection = topSection + section.offsetHeight/2;

        const distanceToSection = midViewport - midSection;

        const parallaxTags = section.querySelectorAll(`[data-parallax]`)

        // loop over each parallaxed tag
        parallaxTags.forEach(tag => {
            const speed = parseFloat(tag.getAttribute("data-parallax"))
            tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
        })
        
    })
})