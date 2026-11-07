
/* =================================
   LOGIN BOOKSTORE
================================= */

// Mengambil elemen form
const loginForm = document.getElementById("loginForm");

// Proses login
loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Memeriksa akun
    const akun = dataAkun.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (akun) {

        alert("Login berhasil! Selamat datang " + akun.nama);

        // Mengarahkan ke dashboard
        window.location.href = "dashboard.html";

    } else {

        alert("email/password yang anda masukkan salah");

    }

});

// =================================
// MODAL LUPA PASSWORD
// =================================

const forgotModal = document.getElementById("forgotModal");

document.getElementById("forgotBtn").addEventListener("click", function() {
    forgotModal.style.display = "flex";
});

document.getElementById("closeForgot").addEventListener("click", function() {
    forgotModal.style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function() {

    const email = document.getElementById("forgotEmail").value;

    if (email === "") {
        alert("Silakan masukkan email terlebih dahulu.");
    } else {
        alert("Permintaan pemulihan password berhasil disimulasikan.");
        forgotModal.style.display = "none";
    }

});

// =================================
// MODAL DAFTAR
// =================================

const registerModal = document.getElementById("registerModal");

document.getElementById("registerBtn").addEventListener("click", function() {
    registerModal.style.display = "flex";
});

document.getElementById("closeRegister").addEventListener("click", function() {
    registerModal.style.display = "none";
});

// Proses pendaftaran
document.getElementById("submitRegister").addEventListener("click", function() {

    const nama = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;

    if (nama === "" || email === "" || password === "") {
        alert("Semua kolom harus diisi.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Format email tidak valid.");
        return;
    }

    if (password.length < 6) {
        alert("Password minimal 6 karakter.");
        return;
    }

    const emailTerdaftar = dataAkun.some(function(user) {
        return user.email === email;
    });

    if (emailTerdaftar) {
        alert("Email sudah terdaftar.");
        return;
    }

    dataAkun.push({
        nama: nama,
        email: email,
        password: password
    });

    alert("Pendaftaran berhasil! Silakan login.");

    registerModal.style.display = "none";

    document.getElementById("registerName").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";

});
