//jackie game
//const container = document.getElementById("container")
//container.innerHTML = "<button>Swing!</button>"

console.log("PLAY BALL!!! - Blue")

//logic

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

const isUp = {
    homeTeam: false,
    awayTeam: true
}

const pitch = {
    ball: 0,
    strike: 0,
    flyout: 0,
    groundout: 1,
    single: 1,
    double: 2,
    triple: 3,
    homerun: 4
  }

const bases = {
    1: false,
    2: false,
    3: false
}

function clearBases() {
    bases[1] = false
    bases[2] = false
    bases[3] = false
}

const gameState = {
    inning: 1,
    homeScore: 0,
    awayScore: 0,
    outs: 0,
    strikes: 0,
    balls: 0
}

function newAtBat() {
    gameState.balls = 0
    gameState.strikes = 0
}

function inningOver() {
    gameState.balls = 0
    gameState.strikes = 0
    gameState.outs = 0
    if(isUp.homeTeam === true) {
        isUp.homeTeam = false
        isUp.awayTeam = true
        gameState.inning++
    } else {
        isUp.homeTeam = true
        isUp.awayTeam = false
    }
}

function swing() {
    let keys = Object.keys(pitch)
    let prop = keys[Math.floor(Math.random() * keys.length)]
    if (prop === "ball") {
        console.log("ball")
        gameState.balls++
        totalBases = 0
            if(gameState.balls === 4) {
                console.log("walk")
                newAtBat()
                totalBases = 1
            }
        } else if (prop === "strike") {
            console.log("strike")
            gameState.strikes++
            totalBases = 0
            if(gameState.strikes === 3) {
                console.log("strike out")
                gameState.outs++
                newAtBat()
                totalBases = 0
            }
        } else if (prop === "single") {
            console.log("single")
            newAtBat()
            totalBases = 1
        } else if (prop === "double") {
            console.log("double")
            newAtBat()
            totalBases = 2
        } else if (prop === "triple") {
            console.log("triple")
            newAtBat()
            totalBases = 3
        } else if (prop === "homerun") {
            console.log("home run")
            newAtBat()
            totalBases = 4
        } else if (prop === "groundout") {
            console.log("groundout")
            gameState.outs++
            newAtBat()
            totalBases = 0
        }  else if (prop === "flyout") {
            console.log("flyout")
            gameState.outs++
            newAtBat()
            totalBases = 0
        }
    if(gameState.outs === 3) {
        console.log("switch sides!")
        totalBases = 0
        inningOver()
        clearBases()
    }
    return totalBases
}

function baseRunner(totalBases) {
    if(totalBases === 0) {
      return totalBases
    }
      for(let i=3; i > 0; i--) {
          if(bases[i]) {
              newBase = totalBases + i
              if(newBase > 3) {
                  if(isUp.homeTeam === true) {
                      gameState.homeScore++
                  } else {
                      gameState.awayScore++
                  }
              } else {
                  bases[newBase] = true
              }
              bases[i] = false
          } 
      }
        if(totalBases < 4) {
              bases[totalBases] = true
          } else {
              if(isUp.homeTeam === true) {
                  gameState.homeScore++
              } else {
                  gameState.awayScore++
              }  
          }
    return totalBases
  }

function playGame() {
    console.log(gameState)
   return baseRunner(swing())
}

