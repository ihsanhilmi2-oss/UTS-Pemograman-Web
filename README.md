# UTS-Pemograman-Web
# 📚 BookStore – Aplikasi Pemesanan Buku Online

## Deskripsi Project

BookStore merupakan aplikasi web sederhana untuk pemesanan buku secara online yang dibuat sebagai tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web 1.

Aplikasi ini dikembangkan menggunakan HTML, CSS, dan JavaScript dengan fokus pada pengembangan Front-End. Data buku dan transaksi menggunakan data dummy yang disimpan melalui JavaScript dan Local Storage browser.

## 🎯 Tujuan Project

- Menerapkan struktur HTML yang semantik dan valid.
- Mengelola tampilan website menggunakan CSS.
- Menerapkan manipulasi DOM menggunakan JavaScript.
- Membuat validasi form dan alert.
- Mengembangkan aplikasi web dengan beberapa halaman yang saling terhubung.

## ✨ Fitur Aplikasi

### 1. Login
- Login menggunakan email dan password.
- Validasi akun menggunakan JavaScript.
- Notifikasi ketika email atau password salah.
- Modal Lupa Password.
- Modal Daftar akun baru.

### 2. Dashboard
- Greeting otomatis berdasarkan waktu lokal.
- Navigasi ke menu utama.
- Informasi laporan pemesanan.
- Riwayat transaksi.
- Fitur Logout.

### 3. Informasi Stok / Katalog Buku
- Menampilkan daftar buku secara dinamis.
- Menampilkan judul, penulis, kategori, harga, dan stok.
- Menambahkan buku baru menggunakan JavaScript DOM.
- Menghitung total jenis buku dan jumlah stok.
- Memilih buku untuk melanjutkan ke Checkout.

### 4. Checkout
- Menampilkan buku yang dipilih.
- Mengatur jumlah pembelian.
- Menghitung subtotal dan total pembayaran otomatis.
- Form informasi pemesan.
- Pilihan metode pembayaran.
- Konfirmasi pesanan.
- Membuat nomor Delivery Order (DO).

### 5. Tracking Pengiriman
- Pencarian pesanan berdasarkan nomor DO.
- Menampilkan nama pemesan dan detail buku.
- Menampilkan status pengiriman.
- Progress bar pengiriman.
- Menampilkan ekspedisi, tanggal kirim, jenis paket, dan total pembayaran.

## 🛠️ Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Array JavaScript
- Local Storage
- Visual Studio Code
- Live Server

## 📁 Struktur Folder

```text
UTS_Pemrograman_Web/
│
├── index.html
│
├── pages/
│   ├── login.html
│   ├── dashboard.html
│   ├── stok.html
│   ├── checkout.html
│   └── tracking.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── data.js
│   ├── login.js
│   ├── dashboard.js
│   ├── stok.js
│   ├── checkout.js
│   └── tracking.js
│
├── assets/
│   └── images/
│
└── README.md
```

## 🚀 Cara Menjalankan Project

1. Download atau clone repository project.
2. Buka folder project menggunakan Visual Studio Code.
3. Pastikan seluruh file dan folder sudah tersedia.
4. Install ekstensi Live Server jika belum tersedia.
5. Klik kanan file `index.html`.
6. Pilih **Open with Live Server**.
7. Website akan terbuka melalui browser.

## 🔐 Akun Demo

Gunakan akun berikut untuk mencoba fitur login:

| Keterangan | Informasi |
|---|---|
| Email | admin@gmail.com |
| Password | admin123 |

## 📌 Penyimpanan Data

Aplikasi ini tidak menggunakan server atau database eksternal.

Data yang digunakan meliputi:

- Data akun dan katalog buku menggunakan Array JavaScript.
- Buku yang dipilih disimpan menggunakan Local Storage.
- Data transaksi dan nomor Delivery Order disimpan menggunakan Local Storage.

Data akun dan katalog yang masih menggunakan variabel JavaScript dapat kembali ke kondisi awal ketika halaman dimuat ulang.

## 👨‍💻 Pengembang

Project ini dibuat sebagai bagian dari tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web.

**Nama:** Muhammad Ikhsan Hilmi

**Program Studi:** Teknik Informatika

**Mata Kuliah:** Pemrograman Web 

---

© 2026 BookStore – Aplikasi Pemesanan Buku Online.
