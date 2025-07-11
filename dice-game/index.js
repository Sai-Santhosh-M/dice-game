function rollDice() {
  const image1 = document.querySelector(".img1");
  const image2 = document.querySelector(".img2");

  image1.classList.add("animate-dice");
  image2.classList.add("animate-dice");

  setTimeout(() => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    document.getElementById("player1-number").innerHTML = "Number: " + randomNumber1;
    document.getElementById("player2-number").innerHTML = "Number: " + randomNumber2;

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }

    image1.classList.remove("animate-dice");
    image2.classList.remove("animate-dice");
  }, 500);
}
