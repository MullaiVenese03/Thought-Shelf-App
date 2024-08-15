var addboxbutton = document.querySelector("#addbox-button")
var container = document.querySelector(".container")
var overlaybox = document.querySelector(".overlay-box")

addboxbutton.addEventListener("click", function () {
    container.style.display = "block"
    overlaybox.style.display = "block"
})

var cancelbutton = document.querySelector("#cancelbutton")

cancelbutton.addEventListener("click", function (event) {
    event.preventDefault()
    container.style.display = "none"
    overlaybox.style.display = "none"
})

var addbutton = document.querySelector("#addbutton")
var container1content = document.querySelector(".container1-content")
var booktitle = document.querySelector("#booktitle")
var bookauthor = document.querySelector("#bookauthor")
var shortdescription = document.querySelector("#shortdescription")

addbutton.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "container-content")
    div.innerHTML = `<h2>${booktitle.value}</h2> <h5>${bookauthor.value}</h5> <p>${shortdescription.value}</p> <button onclick="deletebutton(event)">Delete</button>`
    container1content.append(div)
    container.style.display = "none"
    overlaybox.style.display = "none"
    booktitle.value = ""
    bookauthor.value = ""
    shortdescription.value = ""
})

var containercontent = document.querySelector(".container-content")

function deletebutton(event) {
    event.target.parentElement.remove()
}
