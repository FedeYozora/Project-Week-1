function displayResults() {
  window.location.href = "./indexPage3.html";

  let percentage = Math.round((score / questions.length) * 100);

  if (percentage >= 60) {
    console.log("Congratulazioni sei passato");
  } else {
    console.log("Non hai superato il test...");
  }
}
