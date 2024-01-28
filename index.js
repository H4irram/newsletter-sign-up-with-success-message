const myForm = document.getElementById("myForm");

const submitForm = (event) => {
  event.preventDefault();

  const email = document.getElementById("emailInput").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("errorMessage").classList.remove("hidden");
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "hsl(4, 100%, 67%, 0.1)";
    emailInput.placeholder.style.color = "hsl(4, 100%, 67%)"; //
    return; // Stop execution if email is not valid
  }

  // Hide error message and reset styles
  document.getElementById("errorMessage").classList.add("hidden");
  emailInput.style.borderColor = "";
  emailInput.style.color = "";
  emailInput.style.backgroundColor = "";
  emailInput.placeholder.style.color = "";

  // Redirect to thank-you.html with email as a query parameter
  window.location.href = `thank-you.html?email=${encodeURIComponent(email)}`;
};

// Retrieve the email from the URL parameters and display it on the thank-you page
const userEmailSpan = document.getElementById("userEmail");
if (userEmailSpan) {
  const urlParams = new URLSearchParams(window.location.search);
  const userEmail = urlParams.get("email");
  userEmailSpan.textContent = userEmail;
}
