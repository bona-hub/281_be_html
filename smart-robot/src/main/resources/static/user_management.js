document.addEventListener("DOMContentLoaded", function () {
    // Mock user data
    const users = [
        {
            id: 1,
            username: "admin",
            email: "admin@example.com",
            role: "Admin"
        },
        {
            id: 2,
            username: "john_doe",
            email: "john@example.com",
            role: "Robot Owner"
        },
        {
            id: 3,
            username: "jane_doe",
            email: "jane@example.com",
            role: "Robot Owner"
        }
    ];

    const userTableBody = document.getElementById("userTableBody");

    // Populate user table
    function loadUsers() {
        userTableBody.innerHTML = "";
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <div class="action-buttons">
                        <button class="edit" data-id="${user.id}">Edit</button>
                        <button class="delete" data-id="${user.id}">Delete</button>
                        <button class="assign-role" data-id="${user.id}" ${user.role === "Admin" ? "disabled" : ""}>
                            Assign Role
                        </button>
                    </div>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Event listener for user edit
    userTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("edit")) {
            const userId = e.target.getAttribute("data-id");
            window.location.href = `Profile.html?userId=${userId}`;
        }
    });

    // Event listener for user deletion
    userTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            const userId = e.target.getAttribute("data-id");
            if (confirm(`Are you sure you want to delete User ID ${userId}?`)) {
                // Send delete request to the backend (replace with actual API call)
                alert(`User ID ${userId} and associated robots deleted.`);
                // Remove user from local mock data
                const userIndex = users.findIndex(user => user.id == userId);
                if (userIndex !== -1) {
                    users.splice(userIndex, 1);
                    loadUsers();
                }
            }
        }
    });

    // Event listener for role assignment
    userTableBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("assign-role")) {
            const userId = e.target.getAttribute("data-id");
            window.location.href = `SecuritySettings.html?userId=${userId}`;
        }
    });

    // Load users on page load
    loadUsers();
});
