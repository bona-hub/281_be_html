document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!validateEmail(email)) {
    alert("Invalid email format!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!checkPasswordStrength(password)) {
    alert("Password must include letters, numbers, and symbols.");
    return;
  }

  alert(`Welcome ${firstName} ${lastName}!`);
  window.location.href = "dashboard.html"; // Redirect to dashboard after successful sign-up
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkPasswordStrength(password) {
  const strengthRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValid = strengthRegex.test(password);
  const passwordStrengthEl = document.getElementById("passwordStrength");
  passwordStrengthEl.innerText = isValid
    ? "Password strength: Strong"
    : "Password strength: Weak (Use letters, numbers, and symbols)";
  passwordStrengthEl.style.color = isValid ? "green" : "red";
  return isValid;
}
