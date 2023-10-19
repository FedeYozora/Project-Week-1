function goResultsPage() {
  window.location.href = "./indexPage3.html";
}

score = JSON.parse(localStorage.getItem("score"));

function displayResults() {
  let percentage = Math.round((score / 10) * 100);

  if (percentage >= 60) {
    document.getElementsByClassName("correctPerc")[0].innerText =
      percentage + "%";
    document.getElementsByClassName("incorrectPerc")[0].innerText =
      parseInt(100 - percentage) + "%";
    document.getElementsByClassName("correctNumb")[0].innerText =
      score + "/10 questions";
    document.getElementsByClassName("incorrectNumb")[0].innerText =
      parseInt(10 - score) + "/10 questions";
    document.getElementsByClassName("chart-text")[0].innerHTML = `
        <text x="50%" y="25%" class="chart-label">
          Congratulations!
        </text>
        <text x="50%" y="30%" class="chart-label-colorChange">
          You passed the exam.
        </text>
        <text x="50%" y="40%" class="chart-label-1">
          We'll send you the certificate
        </text>
        <text x="50%" y="45%" class="chart-label-1">
          in few minutes.
        </text>
        <text x="50%" y="50%" class="chart-label-1">
          Check your email (including
        </text>
        <text x="50%" y="55%" class="chart-label-1">
          promotions / spam folder)
        </text>
      `;
    console.log("Congratulazioni sei passato");
  } else {
    document.getElementsByClassName("correctPerc")[0].innerText =
      percentage + "%";
    document.getElementsByClassName("incorrectPerc")[0].innerText =
      parseInt(100 - percentage) + "%";
    document.getElementsByClassName("correctNumb")[0].innerText =
      score + "/10 questions";
    document.getElementsByClassName("incorrectNumb")[0].innerText =
      parseInt(10 - score) + "/10 questions";
    document.getElementsByClassName("chart-text")[0].innerHTML = `
        <text x="50%" y="25%" class="chart-label">
          Sorry,
        </text>
        <text x="50%" y="31%" class="chart-label">
          you did not pass the exam.
        </text>
        <text x="50%" y="45%" class="chart-label-colorChange">
          Better luck next time!
        </text>
      `;
    console.log("Non hai superato il test...");
  }
}

displayResults();
