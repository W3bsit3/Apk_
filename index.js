// Mendapatkan data dari localStorage atau inisialisasi data kosong
const storedData = JSON.parse(localStorage.getItem("itemData")) || [];

// Fungsi navigasi antara halaman
function navigateToData() {
    window.location.href = "data.html";
}

function navigateToDashboard() {
    window.location.href = "dashboard.html";
}

// Render tabel
function renderTable() {
    const table = document.getElementById("dataTable");
    table.innerHTML = storedData.map((item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="Gambar"></td>
            <td>${item.use}</td>
            <td>${item.reason}</td>
            <td>${item.cost}</td>
            <td>
                <button onclick="deleteItem(${index})" class="delete-button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join("");
}

// Fungsi hapus item
function deleteItem(index) {
    storedData.splice(index, 1);
    localStorage.setItem("itemData", JSON.stringify(storedData));
    renderTable();
}

// Menambahkan data baru
document.getElementById("dataForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("itemName").value;
    const use = document.getElementById("itemUse").value;
    const reason = document.getElementById("itemReason").value;
    const cost = parseFloat(document.getElementById("itemCost").value);
    const imageFile = document.getElementById("itemImage").files[0];

    const reader = new FileReader();
    reader.onload = function () {
        const image = reader.result;

        storedData.push({ name, use, reason, cost, image });
        localStorage.setItem("itemData", JSON.stringify(storedData));
        renderTable();
        e.target.reset();
    };

    reader.readAsDataURL(imageFile); // Membaca file gambar
});

renderTable(); // Render data saat halaman pertama kali dimuat

function logout() {
    alert("Anda telah logout!");
    // Fungsi logout sebenarnya bisa menghapus session atau token jika ada
    window.location.href = "login.html"; // Redirect ke halaman login setelah logout
}