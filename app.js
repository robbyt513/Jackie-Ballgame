
let hitOutcomeMessage1 = document.getElementById("message-el")
let hitOutcomeMessage2 = document.getElementById("message-el2")
let homeScore1 = document.getElementById("home-score")
let awayScore2 = document.getElementById("away-score")
let ball1 = document.getElementById("balls")
let strike1 = document.getElementById("strikes")
let outs = document.getElementById("outs")
let inning = document.getElementById("inning")
let baseColor1 = document.getElementById("first-base")
let baseColor2 = document.getElementById("second-base")
let baseColor3 = document.getElementById("third-base")
let buttonHome = document.querySelector(".button-home")
let buttonAway = document.querySelector(".button-away")
let buttonHome2 = document.querySelector(".button-home2")
let buttonAway2 = document.querySelector(".button-away2")


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
        Ball: 0,
        Strike: 0,
        Flyout: 0,
        Groundout: 0,
        Single: 1,
        Double: 2,
        Triple: 3,
        Homerun: 4
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

    //Weighted the outcomes of Pitch object
    weightedRandom(items, weights) {
        const cumulativeWeights = [];
        for (let i = 0; i < weights.length; i += 1) {
          cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
        }

        const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
        const randomNumber = maxCumulativeWeight * Math.random();

        for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
          if (cumulativeWeights[itemIndex] >= randomNumber) {
            return {
              outcome: Object.keys(this.pitch)[itemIndex],
              bases: Object.values(this.pitch)[itemIndex],
            }
          }
        }
      }

    getWeightedOutcome() {
       return this.weightedRandom(Object.keys(this.pitch), [20,20,10,10,4,2,1,2]) 
    }

    getWeightedOutcomePowerSwing(){
        return this.weightedRandom(Object.keys(this.pitch), [20,30,20,20,2,2,1,4])       
    }
    
    swing() {
        this.result = Object.values(this.getWeightedOutcome())
        this.outcome = this.result[0]
        this.numBases = this.result[1]
        return this.numBases
    }

    powerSwing() {
        this.result = Object.values(this.getWeightedOutcomePowerSwing())
        this.outcome = this.result[0]
        this.numBases = this.result[1]
        return this.numBases
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
       return this.baseRunner(this.swing())
    }

    playGamePowerSwing() {
        return this.baseRunner(this.powerSwing())
     }

    renderHitResults() {
        let outcome = this.outcome
        let swingResultMessage1;
        let swingResultMessage2;
        if (outcome === "Ball") {
            this.swingResultMessage1 = "Ball"
            this.swingResultMessage2 = "Good Eye 👀"
            this.balls++
                if(this.balls === 4) {
                    this.swingResultMessage2 = "Take Your Base!"
                    this.newAtBat()
                    this.baseRunner(1)
                }
            } else if (outcome === "Strike") {
                this.swingResultMessage1 = "Strike"
                this.swingResultMessage2 = "Swing The Bat!"
                this.strikes++
                if(this.strikes === 3) {
                    this.swingResultMessage2 = "Strike Out! 😂🤣"
                    this.outs++
                    this.newAtBat()
                }
            } else if (outcome === "Single") {
                this.swingResultMessage1 = "Single"
                this.swingResultMessage2 = "Nice Hit 😃"
                this.newAtBat()
            } else if (outcome === "Double") {
                this.swingResultMessage1 = "Double"
                this.swingResultMessage2 = "Nice Hit 😃"
                this.newAtBat()
            } else if (outcome === "Triple") {
                this.swingResultMessage1 = "Triple"
                this.swingResultMessage2 = "Nice Hit 😃"
                this.newAtBat()
            } else if (outcome === "Homerun") {
                this.swingResultMessage1 = "Home run!!!!"
                this.swingResultMessage2 = "Nice Hit 😃"
                this.newAtBat()
            } else if (outcome === "Groundout") {
                this.swingResultMessage1 = "Groudout"
                this.swingResultMessage2 = "You're Out 😡"
                this.outs++
                this.newAtBat()
            }  else if (outcome === "Flyout") {
                this.swingResultMessage1 = "Flyout"
                this.swingResultMessage2 = "You're Out 😡"
                this.outs++
                this.newAtBat()
            }
        if(this.outs === 3) {
            swingResultMessage2 = "Switch Sides! 🔁"
            this.inningOver()
            this.clearBases()
        }
}

    renderGameState() {
        ball1.textContent = "Balls: " + this.balls
        strike1.textContent = "Strikes: " + this.strikes
        outs.textContent = "Outs: " + this.outs
        homeScore1.textContent = this.homeTeam + ": " + this.homeScore
        awayScore2.textContent = this.awayTeam + ": " + this.awayScore
        buttonHome.textContent = this.homeTeam + " " + "Bat"
        buttonAway.textContent = this.awayTeam + " " + "Bat"
        buttonHome2.textContent = this.homeTeam + " " + "Power Bat"
        buttonAway2.textContent = this.awayTeam + " " + "Power Bat"
        //Swing result message
        if(this.swingResultMessage1) {
            hitOutcomeMessage1.textContent = "It's a " + this.swingResultMessage1
            hitOutcomeMessage1.style.color = "black"
        } else {
            hitOutcomeMessage1.textContent = "You gonna play or what?"
        }
        if(this.swingResultMessage2) {
            hitOutcomeMessage2.textContent = this.swingResultMessage2
        } else {
            hitOutcomeMessage2.textContent = "Swing the bat!"
        }
        //Change top & Bottom of inning logic
        if(this.homeBat === true) {
            inning.textContent = "Inning: " + this.inning + "▼"
        } else {
            inning.textContent = "Inning: " + this.inning + "▲"
        }
        //Buttons on/off logic
        if(this.homeBat === false) {
            buttonHome.disabled = true
            buttonAway.disabled = false
            buttonHome2.disabled = true
            buttonAway2.disabled = false
        } else {
            buttonHome.disabled = false
            buttonAway.disabled = true
            buttonHome2.disabled = false
            buttonAway2.disabled = true
        }
        //Button changes color when off
        if(this.homeBat === false) {
            buttonHome.style.backgroundColor = "grey"
            buttonAway.style.backgroundColor = "#13aa52"
            buttonHome2.style.backgroundColor = "grey"
            buttonAway2.style.backgroundColor = "#13aa52"
        } else {
            buttonHome.style.backgroundColor = "#13aa52"
            buttonAway.style.backgroundColor = "grey"
            buttonHome2.style.backgroundColor = "#13aa52"
            buttonAway2.style.backgroundColor = "grey"
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
        if(this.inning > 9 && this.homeScore < this.awayScore) {
            buttonHome.disabled = true
            buttonAway.disabled = true
            buttonHome2.disabled = true
            buttonAway2.disabled = true
            hitOutcomeMessage1.textContent = "Away Team Wins!!"
        }
        if(this.inning >= 9 && this.homeScore > this.awayScore && this.homeBat === true) {
            buttonAway.disabled = true
            buttonHome.disabled = true
            buttonAway2.disabled = true
            buttonHome2.disabled = true
            hitOutcomeMessage1.textContent = "Home Team Wins!!"
        }
    }
}

let newGame = new Game(window.prompt("Enter home team name!", "Home Team"), window.prompt("Enter away team name!", "Away Team"))

newGame.renderHitResults()
newGame.renderGameState()

function runGame() {
    newGame.playGame()
    newGame.renderHitResults()
    newGame.renderGameState()
}

function runGamePowerSwing() {
    newGame.playGamePowerSwing()
    newGame.renderHitResults()
    newGame.renderGameState()
}


