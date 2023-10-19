function goResultsPage() {
  window.location.href = "./indexPage3.html";
  displayResults();
}

function displayResults() {
<<<<<<< Updated upstream
  let points = score;

  let percentage = Math.round((points / 10) * 100);
=======
  displayDonutResults();
  let percentage = Math.round((score / 10) * 100);
>>>>>>> Stashed changes

  if (percentage >= 60) {
    document.getElementsByClassName("correctPerc")[0].innerText =
      percentage + "%";
    document.getElementsByClassName("incorrectPerc")[0].innerText =
      parseInt(100 - percentage) + "%";
    document.getElementsByClassName("correctNumb")[0].innerText =
      points + "/10 questions";
    document.getElementsByClassName("incorrectNumb")[0].innerText =
      parseInt(10 - points) + "/10 questions";
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
      points + "/10 questions";
    document.getElementsByClassName("incorrectNumb")[0].innerText =
      parseInt(10 - points) + "/10 questions";
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
<<<<<<< Updated upstream
=======

function displayDonutResults() {
  let donutChart = document.getElementsByClassName("donut-segment");
  if (score === 1) {
    donutChart.classlist.add("donut-segment-10");
  } else if (score === 2) {
    donutChart.classlist.add("donut-segment-20");
  } else if (score === 3) {
    donutChart.classlist.add("donut-segment-30");
  } else if (score === 4) {
    donutChart.classlist.add("donut-segment-40");
  } else if (score === 5) {
    donutChart.classlist.add("donut-segment-50");
  } else if (score === 6) {
    donutChart.classlist.add("donut-segment-60");
  } else if (score === 7) {
    donutChart.classlist.add("donut-segment-70");
  } else if (score === 8) {
    donutChart.classlist.add("donut-segment-80");
  } else if (score === 9) {
    donutChart.classlist.add("donut-segment-90");
  } else if (score === 10) {
    donutChart.classlist.add("donut-segment-100");
  } else {
    donutChart.classlist.add("donut-segment-0");
  }
}

displayResults();
>>>>>>> Stashed changes
