function playGame() {
  // Game choices represents possible plays in game,
  // Game stats represents Player vs Computer wins/losses/ties
  gameChoices = ["R", "P", "S"];
  gameStats = [0, 0, 0];

  // Condition for entering game loop
  playingRPS = true;

  while (playingRPS) {
    // Get user input and validate for proper answer
    var userChoice = prompt("Which move would you like to make?", "R, P, or S");

    while (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
      userChoice = prompt(
        "Please enter a valid game move.\n(R, P, or S)",
        "R, P, or S"
      );
    }

    // Generate random selection from computer
    var randomChoice =
      gameChoices[Math.floor(Math.random() * gameChoices.length)];

    // false means computer wins, true means user wins
    var gameOutcome = false;

    if (userChoice === randomChoice) {
      alert("The game is a tie!");
      gameStats[2] = gameStats[2] + 1;
    } else if (
      (userChoice === "R" && randomChoice === "S") ||
      (userChoice === "S" && randomChoice === "P") ||
      (userChoice === "P" && randomChoice === "R")
    ) {
      alert("You won the game!");
      gameStats[0] = gameStats[0] + 1;
    } else {
      alert("You lost the game!");
      gameStats[1] = gameStats[1] + 1;
    }

    alert(
      "Game stats: \nWins: " +
        gameStats[0] +
        "\nLosses: " +
        gameStats[1] +
        "\nTies: " +
        gameStats[2]
    );

    playingRPS = confirm("Do you want to play again?");
  }

  alert("Thanks for playing!");
}
