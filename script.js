let showModal = document.querySelectorAll(".show-modal")
let popUp = document.querySelector(".modal")
let cancel = document.querySelector(".close-modal")
let overlay = document.querySelector(".overlay")


let showPopUp = function () {
    popUp.classList.remove("hidden")
    overlay.classList.remove("hidden")
}


let hidePopUp = function () {
    popUp.classList.add("hidden")
    overlay.classList.add("hidden")
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener("click", showPopUp)
}



cancel.addEventListener("click", hidePopUp)


overlay.addEventListener("click", hidePopUp)


document.addEventListener("keydown", function (e) {

    if (e.key == "Escape" && !popUp.classList.contains("hidden")) {
        hidePopUp()
    }

    // if (!popUp.classList.contains("hidden")) {
    //     hidePopUp()
    // }

})

































//