
let hitOutcomeMessage1 = document.getElementById("message-el")
let hitOutcomeMessage2 = document.getElementById("message-el2")
let homeScore1 = document.getElementById("home-score")
let awayScore2 = document.getElementById("away-score")
let homeTeamName = document.getElementById("home-team")
let awayTeamName = document.getElementById("away-team")
let homeTeamBat = document.getElementById("homeTeamBat")
let awayTeamBat = document.getElementById("awayTeamBat")
let homeTeamPowerBat = document.getElementById("homeTeamPowerBat")
let awayTeamPowerBat = document.getElementById("awayTeamPowerBat")
let ball1 = document.getElementById("balls")
let strike1 = document.getElementById("strikes")
let outs = document.getElementById("outs")
let inning = document.getElementById("inning")
let baseColor1 = document.getElementById("first-base")
let baseColor2 = document.getElementById("second-base")
let baseColor3 = document.getElementById("third-base")
let buttonHome = document.getElementById("baseballBatHome")
let buttonAway = document.getElementById("baseballBatAway")
let buttonHome2 = document.getElementById("baseballBatHome2")
let buttonAway2 = document.getElementById("baseballBatAway2")
let CPU = document.getElementById("playVSCPU")
let newScoreByInningAway1 = document.getElementById("new-score-by-inning-away1")
let newScoreByInningAway2 = document.getElementById("new-score-by-inning-away2")
let newScoreByInningAway3 = document.getElementById("new-score-by-inning-away3")
let newScoreByInningAway4 = document.getElementById("new-score-by-inning-away4")
let newScoreByInningAway5 = document.getElementById("new-score-by-inning-away5")
let newScoreByInningAway6 = document.getElementById("new-score-by-inning-away6")
let newScoreByInningAway7 = document.getElementById("new-score-by-inning-away7")
let newScoreByInningAway8 = document.getElementById("new-score-by-inning-away8")
let newScoreByInningAway9 = document.getElementById("new-score-by-inning-away9")
let newScoreByInningHome1 = document.getElementById("new-score-by-inning-home1")
let newScoreByInningHome2 = document.getElementById("new-score-by-inning-home2")
let newScoreByInningHome3 = document.getElementById("new-score-by-inning-home3")
let newScoreByInningHome4 = document.getElementById("new-score-by-inning-home4")
let newScoreByInningHome5 = document.getElementById("new-score-by-inning-home5")
let newScoreByInningHome6 = document.getElementById("new-score-by-inning-home6")
let newScoreByInningHome7 = document.getElementById("new-score-by-inning-home7")
let newScoreByInningHome8 = document.getElementById("new-score-by-inning-home8")
let newScoreByInningHome9 = document.getElementById("new-score-by-inning-home9")



class Game {
    constructor(homeTeamName, awayTeamName) {
        this.homeTeam = homeTeamName
        this.awayTeam = awayTeamName
        this.inning = 1
        this.homeScore = 0
        this.awayScore = 0
        this.scorePerInning = 0
        this.outs = 0
        this.balls = 0
        this.strikes = 0
        this.homeHits= 0
        this.awayHits = 0
        this.awayBat = true
        this.homeBat = false
    }

    scoreByInning = {
        1: {
            "away": 0,
            "home": 0
        },
        2: {
            "away": 0,
            "home": 0
        },
        3: {
            "away": 0,
            "home": 0
        },
        4: {
            "away": 0,
            "home": 0
        },
        5: {
            "away": 0,
            "home": 0
        },
        6: {
            "away": 0,
            "home": 0
        },
        7: {
            "away": 0,
            "home": 0
        },
        8: {
            "away": 0,
            "home": 0
        },
        9: {
            "away": 0,
            "home": 0
        },
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

    inningScore(score) {
        let score1 = this.inning - 1
            if(this.awayBat) {
                Object.values(this.scoreByInning)[score1]["away"] = score
                if(score1 === 0) {
                    return newScoreByInningAway1.textContent = Object.values(this.scoreByInning)[0]["away"]
                }  else if(score1 === 1) {
                    return newScoreByInningAway2.textContent = Object.values(this.scoreByInning)[1]["away"]
                } else if(score1 === 2) {
                    return newScoreByInningAway3.textContent = Object.values(this.scoreByInning)[2]["away"]
                } else if(score1 === 3) {
                    return newScoreByInningAway4.textContent = Object.values(this.scoreByInning)[3]["away"]
                } else if(score1 === 4) {
                    return newScoreByInningAway5.textContent = Object.values(this.scoreByInning)[4]["away"]
                } else if(score1 === 5) {
                    return newScoreByInningAway6.textContent = Object.values(this.scoreByInning)[5]["away"]
                } else if(score1 === 6) {
                    return newScoreByInningAway7.textContent = Object.values(this.scoreByInning)[6]["away"]
                } else if(score1 === 7) {
                    return newScoreByInningAway8.textContent = Object.values(this.scoreByInning)[7]["away"]
                } else {
                    return newScoreByInningAway9.textContent = Object.values(this.scoreByInning)[8]["away"]
                }
            } else {
                Object.values(this.scoreByInning)[score1]["home"] = score
                if(score1 === 0) {
                    return newScoreByInningHome1.textContent = Object.values(this.scoreByInning)[0]["home"]
                }  else if(score1 === 1) {
                    return newScoreByInningHome2.textContent = Object.values(this.scoreByInning)[1]["home"]
                } else if(score1 === 2) {
                    return newScoreByInningHome3.textContent = Object.values(this.scoreByInning)[2]["home"]
                } else if(score1 === 3) {
                    return newScoreByInningHome4.textContent = Object.values(this.scoreByInning)[3]["home"]
                } else if(score1 === 4) {
                    return newScoreByInningHome5.textContent = Object.values(this.scoreByInning)[4]["home"]
                } else if(score1 === 5) {
                    return newScoreByInningHome6.textContent = Object.values(this.scoreByInning)[5]["home"]
                } else if(score1 === 6) {
                    return newScoreByInningHome7.textContent = Object.values(this.scoreByInning)[6]["home"]
                } else if(score1 === 7) {
                    return newScoreByInningHome8.textContent = Object.values(this.scoreByInning)[7]["home"]
                } else {
                    return newScoreByInningHome9.textContent = Object.values(this.scoreByInning)[8]["home"]
                }
            }
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
        this.inningScore(this.scorePerInning)
        this.balls = 0
        this.strikes = 0
        this.outs = 0
        this.scorePerInning = 0
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
       return this.weightedRandom(Object.keys(this.pitch), [20,20,10,10,6,4,2,3]) 
    }

    getWeightedOutcomePowerSwing(){
        return this.weightedRandom(Object.keys(this.pitch), [15,30,20,20,4,3,2,9])       
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
                          this.scorePerInning++
                      } else {
                          this.awayScore++
                          this.scorePerInning++
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
                      this.scorePerInning++
                  } else {
                      this.awayScore++
                      this.scorePerInning++
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
        homeScore1.textContent = this.homeScore
        awayScore2.textContent = this.awayScore
        homeTeamName.textContent = this.homeTeam
        awayTeamName.textContent = this.awayTeam
        homeTeamBat.textContent = this.homeTeam + " " + "Bat"
        awayTeamBat.textContent = this.awayTeam + " " + "Bat"
        homeTeamPowerBat.textContent = this.homeTeam + " " + "Power Bat"
        awayTeamPowerBat.textContent = this.awayTeam + " " + "Power Bat"
        //Swing result message
        if(this.swingResultMessage1) {
            hitOutcomeMessage1.textContent = "It's a " + this.swingResultMessage1
            hitOutcomeMessage1.style.color = "white"
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
        // Button changes color when off
        if(this.homeBat === false) {
            buttonHome.style.backgroundColor = "grey"
            buttonAway.style.backgroundColor = "#13aa52"
            buttonHome2.style.backgroundColor = "grey"
            buttonAway2.style.backgroundColor = "red"
        } else {
            buttonHome.style.backgroundColor = "#13aa52"
            buttonAway.style.backgroundColor = "grey"
            buttonHome2.style.backgroundColor = "red"
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

function playVsCPU() {
    while (newGame.awayBat) {
        setInterval(runGame(), 5000)
    }
}
