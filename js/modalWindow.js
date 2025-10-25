const modal = document.getElementById("modal")
const eventCards = document.getElementsByClassName("event-card") // множина
const closeBtn = document.getElementById("close_btn")
const modalContent = document.getElementById("modal_content")

function showWindow() {
    modal.style.display = "flex"
    modalContent.style.display = "flex"
}

function closeWindow() {
    modal.style.display = "none"
}

for (let i = 0; i < eventCards.length; i++) {
    eventCards[i].addEventListener("click", showWindow)
}

closeBtn.addEventListener("click", closeWindow)