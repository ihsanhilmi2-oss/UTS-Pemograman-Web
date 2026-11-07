
/* =================================
   KATALOG BUKU BOOKSTORE
================================= */

// Menampilkan data buku ke tabel
function tampilkanBuku() {

    const tabelBuku = document.getElementById("tabelBuku");

    tabelBuku.innerHTML = "";

    dataKatalogBuku.forEach(function(buku, index) {

        const baris = document.createElement("tr");

        baris.innerHTML = `
            <td>${index + 1}</td>
            <td>${buku.judul}</td>
            <td>${buku.penulis}</td>
            <td>${buku.kategori}</td>
            <td>${formatRupiah(buku.harga)}</td>
            <td>${buku.stok}</td>
            <td>
                <button class="btn btn-success"
                    onclick="pilihBuku(${buku.id})">
                    Pesan
                </button>
            </td>
        `;

        tabelBuku.appendChild(baris);

    });

    hitungTotal();
}


// Format harga ke Rupiah
function formatRupiah(angka) {

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);

}


// Menghitung total buku dan stok
function hitungTotal() {

    const totalJenis = dataKatalogBuku.length;

    const totalJumlah = dataKatalogBuku.reduce(function(total, buku) {
        return total + Number(buku.stok);
    }, 0);

    document.getElementById("totalBuku").textContent = totalJenis;

    document.getElementById("totalStok").textContent = totalJumlah;

}


// Menambahkan buku baru menggunakan DOM
document.getElementById("formBuku").addEventListener("submit", function(event) {

    event.preventDefault();

    const judul = document.getElementById("judulBuku").value.trim();
    const penulis = document.getElementById("penulisBuku").value.trim();
    const kategori = document.getElementById("kategoriBuku").value;
    const harga = Number(document.getElementById("hargaBuku").value);
    const stok = Number(document.getElementById("stokBuku").value);

    if (!judul || !penulis || !kategori || harga <= 0 || stok <= 0) {
        alert("Pastikan semua data buku diisi dengan benar.");
        return;
    }

    const bukuBaru = {
        id: Date.now(),
        judul: judul,
        penulis: penulis,
        kategori: kategori,
        harga: harga,
        stok: stok
    };

    // Menambahkan data ke array
    dataKatalogBuku.push(bukuBaru);

    // Memperbarui tampilan tabel
    tampilkanBuku();

    alert("Buku berhasil ditambahkan!");

    // Mengosongkan form
    document.getElementById("formBuku").reset();

});


// Memilih buku untuk checkout
function pilihBuku(id) {

    const buku = dataKatalogBuku.find(function(item) {
        return item.id === id;
    });

    if (!buku) {
        alert("Buku tidak ditemukan.");
        return;
    }

    if (buku.stok <= 0) {
        alert("Stok buku habis.");
        return;
    }

    // Simpan buku pilihan ke localStorage
    localStorage.setItem("bukuPilihan", JSON.stringify(buku));

    alert("Buku berhasil dipilih. Silakan lanjut ke checkout.");

    window.location.href = "checkout.html";

}


// Menampilkan katalog saat halaman dibuka
tampilkanBuku();
