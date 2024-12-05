document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("robotTableBody");
  const addRobotButton = document.getElementById("addRobot");
  const viewButton = document.getElementById("viewMap");
  const mapContainer = document.getElementById("mapContainer");
  const mapElement = document.getElementById("map");
  const statusFilter = document.getElementById("statusFilter");
  const searchRobot = document.getElementById("searchRobot");

  let map;

  // Redirect to the Robot Registration page
  addRobotButton.addEventListener("click", () => {
    window.location.href = "robotregistration.html"; // Replace with the actual registration page URL
  });

  // Initialize map
  const initializeMap = () => {
    if (!map) {
      map = L.map(mapElement).setView([37.3352, -121.8811], 14); // Centered on San Jose State University
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);
    }
  };

  // Add robots dynamically to the map
  const addMarkers = () => {
    const rows = document.querySelectorAll("#robotTableBody tr");
    rows.forEach((row) => {
      const lat = row.getAttribute("data-lat");
      const lng = row.getAttribute("data-lng");
      const name = row.cells[1].innerText;

      if (lat && lng) {
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(`<b>${name}</b>`);
      }
    });
  };

  // Toggle map view
  viewButton.addEventListener("click", () => {
    mapContainer.classList.toggle("hidden");
    if (!mapContainer.classList.contains("hidden")) {
      initializeMap();
      addMarkers();
    }
  });

  // Edit and remove buttons
  tableBody.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("edit-button")) {
      const row = target.closest("tr");
      const robotName = prompt("Edit Robot Name:", row.cells[1].innerText);
      if (robotName) row.cells[1].innerText = robotName;
    }

    if (target.classList.contains("delete-button")) {
      const row = target.closest("tr");
      if (confirm("Are you sure you want to remove this robot?")) {
        row.remove();
      }
    }
  });

  // Filter robots based on the dropdown value
  const filterRobots = () => {
    const filterValue = statusFilter.value.toLowerCase();
    const rows = tableBody.getElementsByTagName("tr");

    Array.from(rows).forEach((row) => {
      const status = row.cells[2].textContent.toLowerCase(); // "Operational Status" column
      if (filterValue === "all" || status === filterValue) {
        row.style.display = ""; // Show row
      } else {
        row.style.display = "none"; // Hide row
      }
    });
  };

  // Search robots based on the search bar input
  const searchRobots = () => {
    const searchTerm = searchRobot.value.toLowerCase();
    const rows = tableBody.getElementsByTagName("tr");

    Array.from(rows).forEach((row) => {
      const robotName = row.cells[1].textContent.toLowerCase(); // "Name" column
      if (robotName.includes(searchTerm)) {
        row.style.display = ""; // Show row
      } else {
        row.style.display = "none"; // Hide row
      }
    });
  };

  // Event listeners for filtering and searching
  statusFilter.addEventListener("change", filterRobots);
  searchRobot.addEventListener("input", searchRobots);

  // Initial filter setup
  filterRobots();
});
