

//jackie game

let messageEl = document.getElementById("message-el")
let messageEl2 = document.getElementById("message-el2")
let score1 = document.getElementById("home-score")
let score2 = document.getElementById("away-score")
let ball1 = document.getElementById("balls")
let strike1 = document.getElementById("strikes")
let outs = document.getElementById("outs")
let inning = document.getElementById("inning")
let message = ""
let message2 = ""
let baseColor1 = document.getElementById("first-base")
let baseColor2 = document.getElementById("second-base")
let baseColor3 = document.getElementById("third-base")
const buttonHome = document.getElementById("button-home")
const buttonAway = document.getElementById("button-away")

class Game {
    constructor(homeTeamName, awayTeamName) {
        this.homeTeam = homeTeamName
        this.awayTeam = awayTeamName
        this.inning = 1
        this.homeScore = 0
        this.awayScore = 0
        this.outs = 0
        this.balls = 0
        this.strikes = 0
        this.awayBat = true
        this.homeBat = false
    }

    pitch = {
        ball: 0,
        strike: 0,
        flyout: 0,
        groundout: 0,
        single: 1,
        double: 2,
        triple: 3,
        homerun: 4
      }

    bases = {
        1: false,
        2: false,
        3: false
    }

    clearBases() {
        this.bases[1] = false
        this.bases[2] = false
        this.bases[3] = false
    }
    
    newAtBat() {
        this.balls = 0
        this.strikes = 0
    }
    
    inningOver() {
        this.balls = 0
        this.strikes = 0
        this.outs = 0
        if(this.homeBat === true) {
            this.homeBat = false
            this.awayBat = true
            this.inning++
        } else {
            this.homeBat = true
            this.awayBat = false
        }
    }
    
    swing() {
        let keys = Object.keys(this.pitch)
        let prop = keys[Math.floor(Math.random() * keys.length)]
        if (prop === "ball") {
            message = "ball"
            this.balls++
            this.totalBases = 0
                if(this.balls === 4) {
                    message2 = "walk"
                    this.newAtBat()
                    this.totalBases = 1
                }
            } else if (prop === "strike") {
                message = "strike"
                this.strikes++
                this.totalBases = 0
                if(this.strikes === 3) {
                    message2 = "strike out"
                    this.outs++
                    this.newAtBat()
                    this.totalBases = 0
                }
            } else if (prop === "single") {
                message = "single"
                this.newAtBat()
                this.totalBases = 1
            } else if (prop === "double") {
                message = "double"
                this.newAtBat()
                this.totalBases = 2
            } else if (prop === "triple") {
                message = "triple"
                this.newAtBat()
                this.totalBases = 3
            } else if (prop === "homerun") {
                message = "home run"
                this.newAtBat()
                this.totalBases = 4
            } else if (prop === "groundout") {
                message = "groudout"
                this.outs++
                this.newAtBat()
                this.totalBases = 0
            }  else if (prop === "flyout") {
                message = "flyout"
                this.outs++
                this.newAtBat()
                this.totalBases = 0
            }
        if(this.outs === 3) {
            message2 = "switch sides!"
            this.totalBases = 0
            this.inningOver()
            this.clearBases()
        }
        console.log(this.totalBases)
        return this.totalBases
    }
    
    baseRunner(value) {
        if(value === 0) {
          return value
        }
          for(let i=3; i > 0; i--) {
              if(this.bases[i]) {
                  this.newBase = value + i
                  if(this.newBase > 3) {
                      if(this.homeBat === true) {
                          this.homeScore++
                      } else {
                          this.awayScore++
                      }
                  } else {
                      this.bases[this.newBase] = true
                  }
                  this.bases[i] = false
              } 
          }
            if(value < 4) {
                  this.bases[value] = true
              } else {
                  if(this.homeBat === true) {
                      this.homeScore++
                  } else {
                      this.awayScore++
                  }
              }
        return value
      }
    
    playGame() {
        score1.textContent = "Home Score: " + this.homeScore
        score2.textContent = "Away Score: " + this.awayScore
        ball1.textContent = "Balls: " + this.balls
        strike1.textContent = "Strikes: " + this.strikes
        outs.textContent = "Outs: " + this.outs
        //Top & Bottom of inning logic
        if(this.homeBat === true) {
            inning.textContent = "Inning: " + this.inning + "▼"
        } else {
            inning.textContent = "Inning: " + this.inning + "▲"
        }
        //Swing result message
        if(message) {
            messageEl.textContent = "It's a " + message
            messageEl.style.color = "black"
        } else {
            messageEl.textContent = "You gonna play or what?"
        }
        if(message2 === true) {
            messageEl2.textContent = message2
        } else {
            messageEl2.textContent = "Swing the bat!!"
        }
        //Button colors logic
        if(this.homeBat === false) {
            buttonHome.disabled = true
            buttonHome.style.backgroundColor = "grey"
        } else {
            buttonHome.disabled = false
            buttonHome.style.backgroundColor = "green"
        }
        if(this.awayBat === false) {
            buttonAway.disabled = true
            buttonAway.style.backgroundColor = "grey"
        } else {
            buttonAway.disabled = false
            buttonAway.style.backgroundColor = "green"
        }
        //Bases turn red if "true"
        if(this.bases[1] === true) {
            baseColor1.style.backgroundColor = "red";
        }  else {
            baseColor1.style.backgroundColor = "white";
        }
        if(this.bases[2] === true) {
            baseColor2.style.backgroundColor = "red";
        } else {
            baseColor2.style.backgroundColor = "white";
        }
        if(this.bases[3] === true) {
            baseColor3.style.backgroundColor = "red";
        } else {
            baseColor3.style.backgroundColor = "white";
        }
        //Game over logic
        if(this.inning > 9 && this.homeScore > this.awayScore) {
            this.awayBat = false
            this.homeBat = false
            messageEl.textContent = "Home Team Wins!!"
        } else if(this.inning > 9 && this.homeScore < this.awayScore) {
            this.awayBat = false
            this.homeBat = false
            messageEl.textContent = "Away Team Wins!!"
        }
       return this.baseRunner(this.swing())
    }
}

let newGame = new Game("Bob's Team", "Rob's Team")
newGame.playGame()

