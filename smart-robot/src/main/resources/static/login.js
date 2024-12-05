document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Get input values
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Username validation
  if (username === "") {
    setError("usernameError", "Username is required.");
    isValid = false;
  } else if (username.length < 4) {
    setError("usernameError", "Username must be at least 4 characters long.");
    isValid = false;
  }

  // Password validation
  if (password === "") {
    setError("passwordError", "Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    setError("passwordError", "Password must be at least 8 characters long.");
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Login successful!");
    window.location.href = "/dashboard"; // Redirect to dashboard
  }
});

function setError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  const inputField = errorElement.previousElementSibling;
  inputField.style.borderColor = "red";
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => (error.innerText = ""));
  const inputFields = document.querySelectorAll(".input-group input");
  inputFields.forEach((input) => (input.style.borderColor = "#ddd"));
}
