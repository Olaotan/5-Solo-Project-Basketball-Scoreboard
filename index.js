let homeScoreBoard = document.getElementById("home-scoreboard")

document.getElementById("home-1")
document.getElementById("home-2")
document.getElementById("home-3")

let guestScoreBoard = document.getElementById("guest-scoreboard")

document.getElementById("guest-1")
document.getElementById("guest-2")
document.getElementById("guest-3")

let homeScore = 1
let guestScore = 0

function addOneHome(){
    homeScore += 1
    homeScoreBoard.textContent = homeScore
    leader()
}

function addTwoHome(){
    homeScore += 2
    homeScoreBoard.textContent = homeScore
    leader()
}

function addThreeHome(){
    homeScore += 3
    homeScoreBoard.textContent = homeScore
    leader()
}


function addOneGuest(){
    guestScore += 1
    guestScoreBoard.textContent = guestScore
    leader()
}

function addTwoGuest(){
    guestScore += 2
    guestScoreBoard.textContent = guestScore
    leader()
}

function addThreeGuest(){
    guestScore += 3
    guestScoreBoard.textContent = guestScore
    leader()
}

function resetBtn(){
    homeScore = 0
    guestScore = 0
    homeScoreBoard.textContent = homeScore
    guestScoreBoard.textContent = guestScore
    leader()
}

function leader(){
    if (homeScore > guestScore){
        homeScoreBoard.classList.add("leader-score")
        guestScoreBoard.classList.remove("leader-score")
    } else if (guestScore > homeScore) {
        guestScoreBoard.classList.add("leader-score")
        homeScoreBoard.classList.remove("leader-score")
    } else {
        homeScoreBoard.classList.remove("leader-score")
        guestScoreBoard.classList.remove("leader-score")
    }
}