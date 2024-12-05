document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([37.3352, -121.8811], 14); // Centered at San Jose State University
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const patrolDetails = document.getElementById("patrolDetails");
  const patrolForm = document.getElementById("patrolForm");

  // Dummy robot database
  const robotDatabase = [
    { id: "R001", name: "Alpha Bot", status: "Active", battery: "80%", route: "" },
    { id: "R002", name: "Beta Bot", status: "Inactive", battery: "100%", route: "" },
  ];

  // Handle Patrol Form Submission
  patrolForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const robotId = document.getElementById("robotId").value.trim();
    const robotName = document.getElementById("robotName").value.trim();
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const startDestination = document.getElementById("startDestination").value.trim();
    const endDestination = document.getElementById("endDestination").value.trim();

    // Check if the robot exists in the database
    const robot = robotDatabase.find((r) => r.id === robotId && r.name === robotName);

    if (!robot) {
      patrolDetails.textContent = "Error: No robot found with the provided ID and name.";
      return;
    }

    // Update the robot's current route
    robot.route = `${startDestination} to ${endDestination}`;

    // Update Patrol Details
    patrolDetails.innerHTML = `
      <b>Robot ID:</b> ${robot.id}<br>
      <b>Robot Name:</b> ${robot.name}<br>
      <b>Operational Status:</b> ${robot.status}<br>
      <b>Battery Level:</b> ${robot.battery}<br>
      <b>Start Time:</b> ${startTime}<br>
      <b>End Time:</b> ${endTime}<br>
      <b>Route:</b> ${robot.route}
    `;

    // Add route to the map
    const startCoords = [37.3382, -121.8858]; // San Jose State University
    const endCoords = [37.3302, -121.8894]; // Example destination

    const route = L.polyline([startCoords, endCoords], { color: "blue" }).addTo(map);
    map.fitBounds(route.getBounds());

    // Save updated route to LocalStorage for Robot Management
    localStorage.setItem("robotDatabase", JSON.stringify(robotDatabase));
  });
});
