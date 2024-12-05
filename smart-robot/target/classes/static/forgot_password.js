document.getElementById("forgotPasswordForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  // Simulating sending the passcode to the backend
  setTimeout(() => {
    document.getElementById("successMessage").innerText = "Passcode successfully sent to your email.";
    setTimeout(() => {
      // Redirect to reset password form
      window.location.href = "reset_password.html";
    }, 2000);
  }, 1000);
});
