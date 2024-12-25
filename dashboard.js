function navigateToData() {
    window.location.href = "index.html";
}

function navigateToDashboard() {
    window.location.href = "dashboard.html";
}

// Load data from localStorage
const storedData = JSON.parse(localStorage.getItem("itemData")) || [];
const labels = storedData.map(item => item.name);
const data = storedData.map(item => item.cost);

// Render chart
new Chart(document.getElementById("dataChart"), {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Biaya Barang',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});
function logout() {
    alert("Anda telah logout!");
    // Fungsi logout sebenarnya bisa menghapus session atau token jika ada
    window.location.href = "login.html"; // Redirect ke halaman login setelah logout
}
