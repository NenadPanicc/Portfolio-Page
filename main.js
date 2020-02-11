let regular = document.getElementById("regular")
let commerce = document.getElementById("ecommerce")
let canvas = document.getElementById("canvas")
//DIVS
let commerceDiv = document.getElementById("commerce-div")
let regularDiv = document.getElementById("regular-div")
let canvasDiv = document.getElementById("canvas-div")

document.addEventListener("click",(event) => {

    switch(event.srcElement.innerHTML) {
        case "E-commerce":
            commerceDiv.style.display = "block"
            regularDiv.style.display = "none"
            canvasDiv.style.display = "none"
            break;
        case "Regular":
            commerceDiv.style.display = "none"
            regularDiv.style.display = "block"
            canvasDiv.style.display = "none"
            break;
        case "Canvas":
            commerceDiv.style.display = "none"
            regularDiv.style.display = "none"
            canvasDiv.style.display = "block"
            break;
    }
})
