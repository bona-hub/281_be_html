document.addEventListener("DOMContentLoaded", () => {
  const currentAlertsTable = document.getElementById("currentAlerts");
  const alertHistoryTable = document.getElementById("alertHistory");

  // Acknowledge and resolve actions
  currentAlertsTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("acknowledge-button")) {
      const row = event.target.closest("tr");
      alert(`Acknowledged: ${row.cells[2].innerText}`);
    }

    if (event.target.classList.contains("resolve-button")) {
      const row = event.target.closest("tr");
      const alertId = row.cells[0].innerText;
      const robotId = row.cells[1].innerText;
      const alertName = row.cells[2].innerText;
      const severity = row.cells[3].innerText;
      const timestamp = row.cells[4].innerText;
      const location = row.cells[5].innerText;

      // Move to history table
      alertHistoryTable.innerHTML += `
        <tr>
          <td>${alertId}</td>
          <td>${robotId}</td>
          <td>${alertName}</td>
          <td>${severity}</td>
          <td>${timestamp}</td>
          <td>${location}</td>
          <td>Resolved</td>
        </tr>
      `;

      // Remove from current alerts
      row.remove();
      alert(`Resolved: ${alertName}`);
    }
  });
});
