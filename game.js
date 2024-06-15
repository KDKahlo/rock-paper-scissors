class RockPaperScissors {
  
  constructor() {
    this.gameChoices = {
      rock: { beats: 'scissors' },
      paper: { beats: 'rock' },
      scissors: { beats: 'paper' },
    };
    this.players = {
      computer: { choice: null, score: 0 },
      user: { choice: null, score: 0 },
    };
    this.rounds = 0;
  }
  // Random generator for the computer's pick
  computerPick() {
    const options = Object.keys(this.gameChoices);
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
  }

  playRound(str) {
    // Assign choices
    this.players.user.choice = str;
    this.players.computer.choice = this.computerPick();

    console.log(this.players.user.choice);
    console.log(this.players.computer.choice);

    // If it is a tie just go to the next round
    // The round counter won't be incremented
    if (this.players.user.choice === this.players.computer.choice) {
      return;
    }

    // Check who wins the round
    if (
      this.gameChoices[this.players.user.choice].beats ===
      this.players.computer.choice
    ) {
      this.players.user.score += 1;
    } else {
      this.players.computer.score += 1;
    }
    // Increment the rounds counter
    this.rounds += 1;

    // Reset the game for next round
    this.players.user.choice = null;
    this.players.computer.choice = null;

    console.log(this.players.user.score);
    console.log(this.players.computer.score);
  }

  resetGame() {
    this.players.computer.choice = null;
    this.players.user.score = null;
    this.players.computer.score = null;
    this.rounds = 0;
  }
}

const newGame = new RockPaperScissors();
