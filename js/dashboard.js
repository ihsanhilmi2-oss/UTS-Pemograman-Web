
/* =================================
   DASHBOARD BOOKSTORE
================================= */

// Greeting berdasarkan waktu lokal
function tampilkanGreeting() {

    const jam = new Date().getHours();

    let sapaan;

    if (jam >= 4 && jam < 11) {
        sapaan = "Selamat Pagi!";
    } else if (jam >= 11 && jam < 15) {
        sapaan = "Selamat Siang!";
    } else if (jam >= 15 && jam < 18) {
        sapaan = "Selamat Sore!";
    } else {
        sapaan = "Selamat Malam!";
    }

    document.getElementById("greeting").textContent = sapaan;
}

// Jalankan greeting
tampilkanGreeting();


// =================================
// LOGOUT
// =================================

document.getElementById("logoutBtn").addEventListener("click", function() {

    const konfirmasi = confirm("Apakah Anda yakin ingin logout?");

    if (konfirmasi) {
        alert("Anda berhasil logout.");

        window.location.href = "login.html";
    }

});
