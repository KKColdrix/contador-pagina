//document.write(`<h1 id="titulo">Hello World<h1>`)

function sumar(){
    let element = document.getElementById("contador")
    let sumar = parseInt(element.textContent) + 1 
    element.textContent = sumar
}

function restar(){
    let element = document.getElementById("contador")
    let restar = parseInt(element.textContent) - 1 
    element.textContent = restar
}