document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("robot-registration-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission

    const userID = document.getElementById("user-id").value;
    const simulatorType = document.getElementById("simulator-type").value;
    const simulatorName = document.getElementById("simulator-name").value;
    const robotName = document.getElementById("robot-name").value;
    const robotType = document.getElementById("robot-type").value;
    const operationalStatus = document.getElementById("operational-status").value;
    const batteryLevel = document.getElementById("battery-level").value;

    // Prepare the data object for submission
    const robotData = {
      userID,
      simulatorType,
      simulatorName,
      robotName,
      robotType,
      operationalStatus,
      batteryLevel,
    };

    // Log or submit the data (example: console.log here)
    console.log("Robot Registered:", robotData);

    // Optionally, clear the form after submission
    form.reset();

    alert("Robot registered successfully!");
  });
});
