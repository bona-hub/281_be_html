// Toggle Two-Factor Authentication Options
document.getElementById("twoFactorToggle").addEventListener("change", (e) => {
  const options = document.getElementById("twoFactorOptions");
  options.classList.toggle("hidden", !e.target.checked);
});

// Save Preferences
document.getElementById("savePreferences").addEventListener("click", () => {
  // Two-Factor Authentication
  const isTwoFactorEnabled = document.getElementById("twoFactorToggle").checked;
  const selectedMethod = document.getElementById("twoFactorMethod").value;

  if (isTwoFactorEnabled) {
    if (selectedMethod === "sms") {
      alert("A code will be sent to your registered mobile number for login.");
    } else if (selectedMethod === "email") {
      alert("A code will be sent to your registered email address for login.");
    } else if (selectedMethod === "app") {
      alert("Use your authenticator app for 2FA.");
    }
  }

  // Data Encryption
  const encryptionEnabled = document.getElementById("encryptionToggle").checked;

  // Account Lockout
  const lockoutThreshold = document.getElementById("lockoutThreshold").value;
  const lockoutDuration = document.getElementById("lockoutDuration").value;

  // Security Alerts
  const alertSeverity = document.getElementById("alertSeverity").value;

  // Role Assignment
  const userRole = document.getElementById("userRole").value;
  const accessLevel = document.getElementById("accessLevel").value;

  // Show Summary
  alert(`Preferences Saved:
    Two-Factor Authentication: ${isTwoFactorEnabled ? "Enabled" : "Disabled"}
    2FA Method: ${selectedMethod}
    Data Encryption: ${encryptionEnabled ? "Enabled" : "Disabled"}
    Lockout Threshold: ${lockoutThreshold || "Not Set"}
    Lockout Duration: ${lockoutDuration || "Not Set"} minutes
    Alert Severity Level: ${alertSeverity}
    User Role: ${userRole}
    Access Level: ${accessLevel}
  `);

  window.location.href = "dashboard.html"; // Redirect to dashboard
});

// Cancel Preferences
document.getElementById("cancelPreferences").addEventListener("click", () => {
  alert("No changes were made.");
  window.location.href = "dashboard.html"; // Redirect to dashboard
});  document.addEventListener("DOMContentLoaded", function () {
    const adminIdField = document.getElementById("adminId");
    const userIdField = document.getElementById("userId");
    const userRoleField = document.getElementById("userRole");
    const assignRoleButton = document.getElementById("assignRoleButton");

    // Example admin ID for validation
    const validAdminId = "123"; // Replace with dynamic value or API check

    // Enable role assignment only if Admin ID is valid
    adminIdField.addEventListener("input", function () {
      if (adminIdField.value === validAdminId) {
        userRoleField.disabled = false;
        assignRoleButton.disabled = false;
      } else {
        userRoleField.disabled = true;
        assignRoleButton.disabled = true;
      }
    });

    // Assign role functionality
    assignRoleButton.addEventListener("click", function () {
      const adminId = adminIdField.value;
      const userId = userIdField.value;
      const selectedRole = userRoleField.value;

      if (!adminId || !userId || !selectedRole) {
        alert("All fields must be filled out.");
        return;
      }

      // Simulating an API call to assign the role
      console.log(`Admin ID: ${adminId}, User ID: ${userId}, Role: ${selectedRole}`);

      alert(`Role "${selectedRole}" assigned to User ID "${userId}" by Admin ID "${adminId}".`);
    });
  });

