// Handle Theme Toggle
document.getElementById("themeToggle").addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  const label = document.getElementById("themeLabel");
  label.textContent = isChecked ? "Dark Mode" : "Light Mode";
  document.body.style.backgroundColor = isChecked ? "#333" : "#f4f4f4";
});

// Handle Notifications Toggle
document.getElementById("notificationsToggle").addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  const label = document.getElementById("notificationsLabel");
  const notificationOptions = document.getElementById("notificationOptions");

  label.textContent = isChecked ? "Enable Notifications" : "Disable Notifications";
  notificationOptions.classList.toggle("hidden", !isChecked);
});

// Handle Save Button
document.getElementById("preferencesForm").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Preferences successfully updated!");
  window.location.href = "dashboard.html"; // Redirect to dashboard
});

// Handle Cancel Button
document.querySelector(".cancel-btn").addEventListener("click", () => {
  alert("No changes were made.");
  window.location.href = "dashboard.html"; // Redirect to dashboard
});
