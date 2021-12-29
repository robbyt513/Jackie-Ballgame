//jackie game

class Game {
    constructor(homeTeamName, awayTeamName) {
        this.homeTeam = Team(homeTeamName, "home")
        this.awayTeam = Team(awayTeamName, "away")
        this.innings = 9
        this.currentInning = 1
        this.homeScore = 0
        this.awayScore = 0
        this.outs = 0
        this.balls = 0
        this.strikes = 0
    }
}

const gameState = {
    inning: 1,
    homeScore: 0,
    awayScore: 0,
    outs: 0,
    strikes: 0,
    balls: 0
}

const pitch = {
  BALL: 0,
  STRIKE: 0,
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3,
  HOMERUN: 4,
  GROUNDOUT: 5,
  FLYOUT: 6
}

const bases = {
    firstBase: false,
    secondBase: false,
    thirdBase: false
}

function clearBases() {
    if(pitch.HOMERUN || inningOver()) {
        bases.firstBase = false
        bases.secondBase = false
        bases.thirdBase = false
    }
}

function newAtBat() {
    gameState.balls = 0
    gameState.strikes = 0
}

function inningOver() {
    gameState.balls = 0
    gameState.strikes = 0
    gameState.outs = 0
    clearBases()
}

function hit() {
    let outcome = swing()
    if(outcome === "SINGLE") {
        bases.firstBase = true
    } else if (outcome === "DOUBLE") {
        bases.secondBase = true
    } else if (outcome === "Triple") {
        bases.thirdBase = true
    }
}

function advanceRunners() {
    let outcome = swing()
    if(outcome === "SINGLE" && bases.firstBase === true) {
        bases.secondBase = true
    } 
    if(outcome === "SINGLE" && bases.secondBase === true) {
        bases.thirdBase = true
    } 
    if(outcome === "DOUBLE" && bases.firstBase === true) {
        bases.firstBase = false;
        bases.secondBase = true;
        bases.thirdBase = true;
    }
}

function swing() {
    let keys = Object.keys(pitch)
    let prop = keys[Math.floor(Math.random() * keys.length)]
    console.log(prop);
    if (prop === "BALL") {
        gameState.balls++
        console.log(gameState.balls)
        if(gameState.balls === 4) {
            console.log("walk")
            bases.firstBase = true
            newAtBat()
        }
    } else if (prop === "STRIKE") {
        gameState.strikes++
        console.log(gameState.strikes)
        if(gameState.strikes === 3) {
            console.log("strike out")
            gameState.outs++
            newAtBat()
            console.log("switch sides!")
        }
    } else if (prop === "SINGLE") {
        console.log("base hit")
        bases.firstBase = true
        newAtBat()
    } else if (prop === "DOUBLE") {
        console.log("double")
        bases.secondBase = true
        newAtBat()
    } else if (prop === "TRIPLE") {
        console.log("triple")
        bases.thirdBase = true
        newAtBat()
    } else if (prop === "HOMERUN") {
        if (this.homeTeam === isUP) {
            gameState.homeScore++
        } else {
            gameState.awayScore++
        }
        clearBases()
    } else if (prop === "GROUNDOUT") {
        gameState.outs++
        console.log(gameState.outs)
        if(gameState.outs === 3) {
            inningOver()
            console.log("switch sides!")
        }
    }  else if (prop === "FLYOUT") {
        gameState.outs++
        console.log(gameState.outs)
        if(gameState.outs === 3) {
            clearBases()
            console.log("switch sides!")
        }
    }
    return prop
}
console.log(swing())

function playGame() {
    addEventListener("click", )
}
