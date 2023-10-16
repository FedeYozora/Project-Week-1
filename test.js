document.getElementById("myCheckbox").addEventListener("click", function () {
  if (this.checked) {
    document.getElementById("myButton").style.pointerEvents = "auto";
  } else {
    document.getElementById("myButton").style.pointerEvents = "none";
  }
});

function redirectToPage() {
  window.location.href = "https://www.example.com";
}
