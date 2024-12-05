document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle Functionality
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.getElementById("menuToggle");
    const signOutBtn = document.getElementById("signOutBtn");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
    });

    signOutBtn.addEventListener("click", function () {
        alert("Sign Out Successfully!");
        window.location.href = "welcome.html"; // Redirect to welcome page
    });

    // Chart Functionality
    const chartTabs = document.querySelectorAll(".chart-tab");
    const statsCtx = document.getElementById("statsBarChart").getContext("2d");
    const operationMetricsCtx = document.getElementById("operationMetricsChart").getContext("2d");

    let barChart, lineChart;

    const fetchChartData = function (monthType) {
        return new Promise((resolve) => {
            try {
                resolve({
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    health: monthType === "last" ? [30, 45, 60, 70, 80, 95, 100] : [40, 55, 70, 80, 90, 100, 110],
                    efficiency: monthType === "last" ? [40, 50, 55, 65, 75, 85, 95] : [50, 60, 70, 80, 90, 95, 100],
                    incidents: monthType === "last" ? [5, 3, 8, 2, 4, 6, 7] : [4, 5, 6, 3, 2, 8, 9],
                });
            } catch (error) {
                console.error("Error fetching chart data:", error);
                resolve({
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    health: [30, 45, 60, 70, 80, 95, 100],
                    efficiency: [40, 50, 55, 65, 75, 85, 95],
                    incidents: [5, 3, 8, 2, 4, 6, 7],
                });
            }
        });
    };

    const renderBarChart = function (monthType) {
        fetchChartData(monthType).then((data) => {
            const chartData = {
                labels: data.labels,
                datasets: [
                    {
                        label: "Robot Health",
                        data: data.health,
                        backgroundColor: "rgba(54, 162, 235, 0.6)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "Patrol Efficiency",
                        data: data.efficiency,
                        backgroundColor: "rgba(75, 192, 192, 0.6)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "Security Incidents",
                        data: data.incidents,
                        backgroundColor: "rgba(255, 99, 132, 0.6)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                ],
            };

            if (barChart) barChart.destroy();

            barChart = new Chart(statsCtx, {
                type: "bar",
                data: chartData,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top",
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: "Values" },
                        },
                        x: {
                            title: { display: true, text: "Months" },
                        },
                    },
                },
            });
        });
    };

    const renderLineChart = function (monthType) {
        fetchChartData(monthType).then((data) => {
            const chartData = {
                labels: data.labels,
                datasets: [
                    {
                        label: "Robot Operation Time",
                        data: data.health,
                        borderColor: "rgba(54, 162, 235, 1)",
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: "Patrol Efficiency",
                        data: data.efficiency,
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        tension: 0.4,
                        fill: true,
                    },
                    {
                        label: "Incident Prevalence",
                        data: data.incidents,
                        borderColor: "rgba(255, 99, 132, 1)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        tension: 0.4,
                        fill: true,
                    },
                ],
            };

            if (lineChart) lineChart.destroy();

            lineChart = new Chart(operationMetricsCtx, {
                type: "line",
                data: chartData,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top",
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: "Values" },
                        },
                        x: {
                            title: { display: true, text: "Months" },
                        },
                    },
                },
            });
        });
    };

    chartTabs.forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            chartTabs.forEach(function (t) {
                t.classList.remove("active");
            });
            event.target.classList.add("active");

            const monthType = event.target.id.includes("Last") ? "last" : "current";

            if (event.target.closest(".chart-container").querySelector("#statsBarChart")) {
                renderBarChart(monthType);
            } else if (event.target.closest(".chart-container").querySelector("#operationMetricsChart")) {
                renderLineChart(monthType);
            }
        });
    });

    renderBarChart("current");
    renderLineChart("current");

    // Table Functionality
    const tableTabs = document.querySelectorAll(".control-tab");
    const tableBody = document.getElementById("robotStatusBody");

    const lastWeekData = [
        { id: "#1", name: "Robot A", status: "Active", battery: "78%", efficiency: "92%", alerts: 1, maintenance: "Yes" },
        { id: "#2", name: "Robot B", status: "Active", battery: "85%", efficiency: "95%", alerts: 0, maintenance: "No" },
        { id: "#3", name: "Robot C", status: "Inactive", battery: "65%", efficiency: "89%", alerts: 3, maintenance: "Yes" },
        { id: "#4", name: "Robot D", status: "Active", battery: "90%", efficiency: "98%", alerts: 0, maintenance: "No" },
    ];

    const allMonthData = [
        ...lastWeekData,
        { id: "#5", name: "Robot E", status: "Active", battery: "88%", efficiency: "96%", alerts: 2, maintenance: "No" },
        { id: "#6", name: "Robot F", status: "Inactive", battery: "70%", efficiency: "85%", alerts: 1, maintenance: "Yes" },
    ];

    const populateTable = function (data) {
        tableBody.innerHTML = "";
        data.forEach(function (row) {
            const tableRow = `
                <tr>
                    <td>${row.id}</td>
                    <td>${row.name}</td>
                    <td><span class="robot-status ${row.status.toLowerCase()}">${row.status}</span></td>
                    <td>${row.battery}</td>
                    <td>${row.efficiency}</td>
                    <td>${row.alerts}</td>
                    <td>${row.maintenance}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", tableRow);
        });
    };

    tableTabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            tableTabs.forEach(function (t) {
                t.classList.remove("active");
            });
            tab.classList.add("active");
            const data = tab.id === "lastWeek" ? lastWeekData : allMonthData;
            populateTable(data);
        });
    });

    populateTable(lastWeekData);
});
// Search Functionality for Sidebar
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const sidebarItems = document.querySelectorAll("#sidebarList li");

    sidebarItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// Redirect to Profile Page
// Search Functionality for Sidebar
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    alert("Search functionality coming soon!"); // Placeholder for search functionality
});

document.addEventListener("DOMContentLoaded", function () {
    const profileIcon = document.getElementById("profileIcon");

    // Simulating user profile update
    function updateProfileIcon(newProfileImage) {
        profileIcon.src = newProfileImage;
    }

    // Example usage (simulate profile update)
    const newProfileImage = "updated-profile-image.png"; // Replace with actual updated image path
    updateProfileIcon(newProfileImage);
});

// Redirect to Profile Page
document.getElementById("profileIcon").addEventListener("click", () => {
    window.location.href = "Profile.html";
});

// Redirect to Alerts Page
document.getElementById("notificationBell").addEventListener("click", () => {
    window.location.href = "AlertsAndNotifications.html";
});
document.addEventListener("DOMContentLoaded", () => {
    const sidebarLinks = document.querySelectorAll(".sidebar ul li a");

    sidebarLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});

