// Toggle Photo Options on Edit Button Click
document.getElementById("editPhotoButton").addEventListener("click", () => {
  const photoOptions = document.getElementById("photoOptions");
  photoOptions.classList.toggle("hidden"); // Show/hide photo options
});

// Handle Add Photo
document.getElementById("addPhotoButton").addEventListener("click", () => {
  document.getElementById("photoInput").click(); // Trigger file input click
});

// Display Selected Photo
document.getElementById("photoInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profilePhoto").src = e.target.result; // Display uploaded image
    };
    reader.readAsDataURL(file);
  }
});

// Handle Delete Photo
document.getElementById("deletePhotoButton").addEventListener("click", () => {
  document.getElementById("profilePhoto").src = "default-profile.png"; // Reset to default photo
  document.getElementById("photoInput").value = ""; // Clear the file input
});

// Handle Save Button (Submit Form)
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const mobileInput = document.querySelector("input[name='mobile']");
  const mobileValue = mobileInput.value.trim(); // Get mobile number input

  // Validate Mobile Number (must start with +1)
  if (!mobileValue.startsWith("+1")) {
    alert("Please enter your mobile number with country code +1.");
    mobileInput.focus(); // Focus on the mobile number input
    return;
  }

  // If validation passes
  alert("Profile successfully updated!");
  window.location.href = "dashboard.html"; // Redirect to dashboard
});

// Handle Cancel Button
document.querySelector(".cancel-btn").addEventListener("click", () => {
  if (confirm("Are you sure you want to cancel? Changes will not be saved.")) {
    window.location.href = "dashboard.html"; // Redirect to dashboard
  }
});
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const emailInput = document.querySelector("input[name='email']");
  const emailValue = emailInput.value.trim(); // Get email input

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus(); // Focus on the email input
    return;
  }

  // Continue with form submission (if validation passes)
  alert("Profile successfully updated!");
  window.location.href = "dashboard.html"; // Redirect to dashboard
});
