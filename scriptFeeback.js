// Get the stars elements
const stars = Array.from(document.querySelectorAll(".stars i"));
const feedback = document.querySelector(".textBox");

// Add a click event listener to each star
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    // Remove the active class from all stars
    stars.forEach(star => star.classList.remove("active"));

    // Add the active class to the clicked star and all previous stars
    stars.slice(0, index1 + 1).forEach(star => star.classList.add("active"));
  });
});

document.getElementById("submitForm").addEventListener("click", e => {
  e.preventDefault();

  const selectedStar = document.getElementsByClassName("active").length;

  // Display a different feedback message based on the selected star value
  if (
    selectedStar === 1 ||
    selectedStar === 2 ||
    selectedStar === 3 ||
    selectedStar === 4 ||
    selectedStar === 5
  ) {
    feedback.innerHTML = `<h1>We're sorry to hear that you had a bad experience.</h1>
        <h3>We hope to improve our service using your feedback!</h3>`;
    document.querySelector(".rating-box").innerHTML = "";
    document.querySelector("main").innerHTML = "";
  } else if (selectedStar === 6 || selectedStar === 7) {
    feedback.innerHTML = `<h1>Thank you for your feedback.</h1>
        <h3>We're glad you had a good experience.</h3>`;
    document.querySelector(".rating-box").innerHTML = "";
    document.querySelector("main").innerHTML = "";
  } else if (selectedStar === 8 || selectedStar === 9 || selectedStar === 10) {
    feedback.innerHTML = `<h1>Thank you for your positive feedback!</h1>
        <h3>We're happy to hear that you had a great experience.</h3>`;
    document.querySelector(".rating-box").innerHTML = "";
    document.querySelector("main").innerHTML = "";
  }
});
