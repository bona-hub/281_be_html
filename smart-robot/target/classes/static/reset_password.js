document.getElementById("resetPasswordForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const passcode = document.getElementById("passcode").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Simulated Passcode Validation
  const validPasscode = "123456"; // This should come from the backend

  const errorMessage = document.getElementById("errorMessage");
  errorMessage.innerText = ""; // Clear previous error

  if (passcode !== validPasscode) {
    errorMessage.innerText = "Invalid passcode. Please enter the correct passcode.";
    return;
  }

  if (newPassword !== confirmPassword) {
    errorMessage.innerText = "New password and confirmation password do not match.";
    return;
  }

  if (newPassword.length < 8) {
    errorMessage.innerText = "Password must be at least 8 characters long.";
    return;
  }

  alert("Password successfully reset!");
  // Simulate saving the new password to the database
  window.location.href = "login.html"; // Redirect to login page
});
