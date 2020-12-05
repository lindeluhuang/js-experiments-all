const sentenceTag = document.querySelector(`input[type="text"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output");

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output");

const leadingTag = document.querySelector(`input[name="leading"]`)
const leadingOutput = document.querySelector("span.leading-output");

const italicTag = document.querySelector(`input[name="italic"]`)

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea")
const originalText = outputTag.value;

// when I type in my sentence tag, update output tag accordintly
// if there's no value, put in original text
sentenceTag.addEventListener("keyup", function() {
    if (this.value) {
        outputTag.value = this.value;
    } else {
        outputTag.value = originalText;
    }
})

// when I type in my output tag, update sentence tag accordintly
outputTag.addEventListener("keyup", function() {
    if (this.value) {
        sentenceTag.value = this.value;
    } else {
        outputTag.value = "";
        sentenceTag.value = "";
    }
})

// when I change typeface, update font family
typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value;
})

// when I change type size slider, update text next to it
// change the output tag's font size
typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px";
    typesizeOutput.innerHTML = this.value + "px";
})

// when I change font weight slider, update text next to it
// change the output tag
fontweightTag.addEventListener("input", function () {
    outputTag.style.fontWeight = this.value;
    fontweightOutput.innerHTML = this.value;
})

// when I change leading slider, update text next to it
// change the output tag
leadingTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value;
    leadingOutput.innerHTML = this.value;
})

// when I change italic checkbox, update font style
italicTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = "italic";
    } else {
        outputTag.style.fontStyle = "normal";
    }
})

// go through all color tags
// when click one of them, change colors
// and make tag selected
colorTags.forEach(tag => {
    tag.addEventListener("click", function() {
        outputTag.style.backgroundColor = this.style.backgroundColor;
        outputTag.style.color = this.style.color;
        
        // reset classes
        colorTags.forEach(tag => {
            tag.classList.remove("selected");
        })
        this.classList.add("selected")
    })
})