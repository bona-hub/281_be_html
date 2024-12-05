// Dummy Data
const simulators = [
    { name: 'Simulator Alpha', userId: 'User001', robotId: 'Robot001', status: 'active', lastAccessed: '2024-11-29 10:30 AM' },
    { name: 'Simulator Beta', userId: 'User002', robotId: 'Robot003', status: 'inactive', lastAccessed: '2024-11-28 08:15 AM' },
    { name: 'Simulator Gamma', userId: 'User003', robotId: 'Robot004', status: 'maintenance', lastAccessed: '2024-11-27 09:45 PM' },
    { name: 'Simulator Delta', userId: 'User004', robotId: 'Robot006', status: 'active', lastAccessed: '2024-11-26 03:00 PM' },
    { name: 'Simulator Epsilon', userId: 'User005', robotId: 'Robot007', status: 'inactive', lastAccessed: '2024-11-25 05:30 PM' },
    { name: 'Simulator Zeta', userId: 'User006', robotId: 'Robot009', status: 'active', lastAccessed: '2024-11-24 07:20 PM' },
    { name: 'Simulator Eta', userId: 'User007', robotId: 'Robot010', status: 'maintenance', lastAccessed: '2024-11-23 06:10 AM' },
    { name: 'Simulator Theta', userId: 'User008', robotId: 'Robot011', status: 'inactive', lastAccessed: '2024-11-22 11:00 AM' },
];

const rowsPerPage = 3;
let currentPage = 1;

function renderTable(page) {
    const tableBody = document.getElementById('simulatorTableBody');
    tableBody.innerHTML = '';

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const currentRows = simulators.slice(start, end);

    currentRows.forEach(sim => {
        const row = `
            <tr>
                <td>${sim.name}</td>
                <td>${sim.userId}</td>
                <td>${sim.robotId}</td>
                <td><span class="status ${sim.status}">${sim.status.charAt(0).toUpperCase() + sim.status.slice(1)}</span></td>
                <td>${sim.lastAccessed}</td>
                <td><button class="action-btn" onclick="viewRobotDetails('${sim.name}')">View Robot</button></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });

    document.getElementById('prevPage').disabled = page === 1;
    document.getElementById('nextPage').disabled = end >= simulators.length;
}

function viewRobotDetails(simulatorName) {
    alert(`Redirecting to robot management for ${simulatorName}`);
    window.location.href = 'robotmanagement.html'; // Update this to your actual page
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage * rowsPerPage < simulators.length) {
        currentPage++;
        renderTable(currentPage);
    }
});

// Initial Render
renderTable(currentPage);
