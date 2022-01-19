// //jackie game
// //const container = document.getElementById("container")
// //container.innerHTML = "<button>Swing!</button>"

// let messageEl = document.getElementById("message-el")
// let messageEl2 = document.getElementById("message-el2")
// let score1 = document.getElementById("home-score")
// let score2 = document.getElementById("away-score")
// let ball1 = document.getElementById("balls")
// let strike1 = document.getElementById("strikes")
// let outs = document.getElementById("outs")
// let inning = document.getElementById("inning")
// let message = ""
// let message2 = ""
// let baseColor1 = document.getElementById("first-base")
// let baseColor2 = document.getElementById("second-base")
// let baseColor3 = document.getElementById("third-base")
// const buttonHome = document.getElementById("button-home")
// const buttonAway = document.getElementById("button-away")
// //logic

// class Game {
//     constructor(homeTeamName, awayTeamName) {
//         this.homeTeam = Team(homeTeamName, "home")
//         this.awayTeam = Team(awayTeamName, "away")
//         this.innings = 9
//         this.homeScore = 0
//         this.awayScore = 0
//         this.outs = 0
//         this.balls = 0
//         this.strikes = 0
//     }
// }

// const isUp = {
//     homeTeam: false,
//     awayTeam: true
// }

// const pitch = {
//     ball: 0,
//     ball: 0,
//     ball: 0,
//     ball: 0,
//     strike: 0,
//     strike: 0,
//     strike: 0,
//     strike: 0,
//     flyout: 0,
//     flyout: 0,
//     flyout: 0,
//     flyout: 0,
//     groundout: 0,
//     groundout: 0,
//     groundout: 0,
//     groundout: 0,
//     single: 1,
//     double: 2,
//     triple: 3,
//     homerun: 4
//   }

// const bases = {
//     1: false,
//     2: false,
//     3: false
// }

// function clearBases() {
//     bases[1] = false
//     bases[2] = false
//     bases[3] = false
// }

// const gameState = {
//     inning: 1,
//     homeScore: 0,
//     awayScore: 0,
//     outs: 0,
//     strikes: 0,
//     balls: 0
// }

// function newAtBat() {
//     gameState.balls = 0
//     gameState.strikes = 0
// }

// function inningOver() {
//     gameState.balls = 0
//     gameState.strikes = 0
//     gameState.outs = 0
//     if(isUp.homeTeam === true) {
//         isUp.homeTeam = false
//         isUp.awayTeam = true
//         gameState.inning++
//     } else {
//         isUp.homeTeam = true
//         isUp.awayTeam = false
//     }
// }

// function swing() {
//     let keys = Object.keys(pitch)
//     let prop = keys[Math.floor(Math.random() * keys.length)]
//     if (prop === "ball") {
//         message = "ball"
//         gameState.balls++
//         totalBases = 0
//             if(gameState.balls === 4) {
//                 message2 = "walk"
//                 newAtBat()
//                 totalBases = 1
//             }
//         } else if (prop === "strike") {
//             message = "strike"
//             gameState.strikes++
//             totalBases = 0
//             if(gameState.strikes === 3) {
//                 message2 = "strike out"
//                 gameState.outs++
//                 newAtBat()
//                 totalBases = 0
//             }
//         } else if (prop === "single") {
//             message = "single"
//             newAtBat()
//             totalBases = 1
//         } else if (prop === "double") {
//             message = "double"
//             newAtBat()
//             totalBases = 2
//         } else if (prop === "triple") {
//             message = "triple"
//             newAtBat()
//             totalBases = 3
//         } else if (prop === "homerun") {
//             message = "home run"
//             newAtBat()
//             totalBases = 4
//         } else if (prop === "groundout") {
//             message = "groudout"
//             gameState.outs++
//             newAtBat()
//             totalBases = 0
//         }  else if (prop === "flyout") {
//             message = "flyout"
//             gameState.outs++
//             newAtBat()
//             totalBases = 0
//         }
//     if(gameState.outs === 3) {
//         message2 = "switch sides!"
//         totalBases = 0
//         inningOver()
//         clearBases()
//     }
//     return totalBases
// }

// function baseRunner(totalBases) {
//     if(totalBases === 0) {
//       return totalBases
//     }
//       for(let i=3; i > 0; i--) {
//           if(bases[i]) {
//               newBase = totalBases + i
//               if(newBase > 3) {
//                   if(isUp.homeTeam === true) {
//                       gameState.homeScore++
//                       this.homeScore++
//                   } else {
//                       gameState.awayScore++
//                   }
//               } else {
//                   bases[newBase] = true
//               }
//               bases[i] = false
//           } 
//       }
//         if(totalBases < 4) {
//               bases[totalBases] = true
//           } else {
//               if(isUp.homeTeam === true) {
//                   gameState.homeScore++
//               } else {
//                   gameState.awayScore++
//               }
//           }
//     return totalBases
//   }

// function playGame() {
//     console.log(gameState)
//     score1.textContent = "Home Score: " + gameState.homeScore
//     score2.textContent = "Away Score: " + gameState.awayScore
//     ball1.textContent = "Balls: " + gameState.balls
//     strike1.textContent = "Strikes: " + gameState.strikes
//     outs.textContent = "Outs: " + gameState.outs
//     //Top & Bottom of inning logic
//     if(isUp.homeTeam === true) {
//         inning.textContent = "Inning: " + gameState.inning + "▼"
//     } else {
//         inning.textContent = "Inning: " + gameState.inning + "▲"
//     }
//     //Swing result message
//     if(message) {
//         messageEl.textContent = "It's a " + message
//         messageEl.style.color = "black"
//     } else {
//         messageEl.textContent = "You gonna play or what?"
//     }
//     if(message2 === true) {
//         messageEl2.textContent = message2
//     } else {
//         messageEl2.textContent = "Swing the bat!!"
//     }
//     //Button colors logic
//     if(isUp.homeTeam === false) {
//         buttonHome.disabled = true
//         buttonHome.style.backgroundColor = "grey"
//     } else {
//         buttonHome.disabled = false
//         buttonHome.style.backgroundColor = "green"
//     }
//     if(isUp.awayTeam === false) {
//         buttonAway.disabled = true
//         buttonAway.style.backgroundColor = "grey"
//     } else {
//         buttonAway.disabled = false
//         buttonAway.style.backgroundColor = "green"
//     }
//     //Bases turn red if "true"
//     if(bases[1] === true) {
//         baseColor1.style.backgroundColor = "red";
//     }  else {
//         baseColor1.style.backgroundColor = "white";
//     }
//     if(bases[2] === true) {
//         baseColor2.style.backgroundColor = "red";
//     } else {
//         baseColor2.style.backgroundColor = "white";
//     }
//     if(bases[3] === true) {
//         baseColor3.style.backgroundColor = "red";
//     } else {
//         baseColor3.style.backgroundColor = "white";
//     }
//     //Game over logic
//     if(gameState.inning > 9 && gameState.homeScore > gameState.awayScore) {
//         isUp.homeTeam = false
//         isUp.awayTeam = false
//         messageEl.textContent = "Home Team Wins!!"
//     } else if(gameState.inning > 9 && gameState.homeScore < gameState.awayScore) {
//         isUp.homeTeam = false
//         isUp.awayTeam = false
//         messageEl.textContent = "Away Team Wins!!"
//     }
//    return baseRunner(swing())
// }

// playGame()








//jackie game
//const container = document.getElementById("container")
//container.innerHTML = "<button>Swing!</button>"

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

    clearBases() {
        bases[1] = false
        bases[2] = false
        bases[3] = false
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
        let keys = Object.keys(pitch)
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
              if(bases[i]) {
                  this.newBase = value + i
                  if(this.newBase > 3) {
                      if(this.homeBat === true) {
                          this.homeScore++
                      } else {
                          this.awayScore++
                      }
                  } else {
                      bases[this.newBase] = true
                  }
                  bases[i] = false
              } 
          }
            if(value < 4) {
                  bases[value] = true
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
        if(bases[1] === true) {
            baseColor1.style.backgroundColor = "red";
        }  else {
            baseColor1.style.backgroundColor = "white";
        }
        if(bases[2] === true) {
            baseColor2.style.backgroundColor = "red";
        } else {
            baseColor2.style.backgroundColor = "white";
        }
        if(bases[3] === true) {
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

let newGame = new Game("Bob's Team", "Rob's Team")
newGame.playGame()

