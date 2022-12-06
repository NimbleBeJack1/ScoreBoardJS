let addOneHomeBtn = document.getElementById("addOneHome")
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let resetScore = document.getElementById("resetScore")
let resetHomeScore = document.getElementById("resetHomeScore")
let subtractHomeScore = document.getElementById("subtractHomeScore")
let subtractGuestScore = document.getElementById("subtractGuestScore")
let countHome = 0
let countGuest = 0
function addOneHome() {
    countHome ++
    homeScore.textContent = countHome
}

function addTwoHome() {
    countHome += 2
    homeScore.textContent = countHome
}

function addThreeHome() {
    countHome += 3
    homeScore.textContent = countHome
}

function addOneGuest() {
    countGuest ++
    guestScore.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function addThreeGuest() {
    countGuest += 3
    guestScore.textContent = countGuest
}

function reset() {
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest

}

function resetHome() {
    countHome = 0
    homeScore.textContent = countHome

}

function resetGuest() {
    countGuest = 0
    guestScore.textContent = countGuest

}

function subtractHome() {
    countHome -= 1
    homeScore.textContent = countHome
}

function subtractGuest() {
    countGuest -= 1
    guestScore.textContent = countGuest
}
