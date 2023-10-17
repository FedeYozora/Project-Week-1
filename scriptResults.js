function displayResults() {
  window.location.href = "./indexPage3.html";
  const resultsArea = document.getElementById("resultsArea");
  const resultsChart = document.createElement("canvas");
  resultsChart.id = "resultsChart";
  resultsArea.appendChild(resultsChart);
}
