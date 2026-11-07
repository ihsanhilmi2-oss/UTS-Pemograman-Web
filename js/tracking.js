
/* =================================
   TRACKING BOOKSTORE
================================= */

// Mengambil elemen form
const trackingForm = document.getElementById("trackingForm");

const hasilTracking = document.getElementById("hasilTracking");

const pesanError = document.getElementById("pesanError");


// Menyembunyikan hasil sebelum pencarian
hasilTracking.style.display = "none";


// Format Rupiah
function formatRupiah(angka) {

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);

}


// =================================
// PROSES PENCARIAN NOMOR DO
// =================================

trackingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nomorDO = document.getElementById("nomorDO")
        .value.trim();

    // Mengambil data transaksi
    const daftarTransaksi = JSON.parse(
        localStorage.getItem("dataPesanan")
    ) || [];

    // Mencari transaksi berdasarkan nomor DO
    const pesanan = daftarTransaksi.find(function(item) {

        return item.nomorDO.toLowerCase() === nomorDO.toLowerCase();

    });

    if (!pesanan) {

        hasilTracking.style.display = "none";

        pesanError.textContent =
            "Nomor Delivery Order tidak ditemukan.";

        pesanError.style.color = "#dc2626";

        return;

    }

    // Jika pesanan ditemukan
    pesanError.textContent = "";

    tampilkanHasilTracking(pesanan);

});


// =================================
// MENAMPILKAN HASIL TRACKING
// =================================

function tampilkanHasilTracking(pesanan) {

    hasilTracking.style.display = "block";

    // Informasi status
    document.getElementById("statusPengiriman").textContent =
        pesanan.status;

    // Informasi pemesan
    document.getElementById("detailDO").textContent =
        pesanan.nomorDO;

    document.getElementById("detailNama").textContent =
        pesanan.nama;

    document.getElementById("detailBuku").textContent =
        pesanan.judulBuku;

    document.getElementById("detailJumlah").textContent =
        pesanan.jumlah + " buku";

    // Informasi ekspedisi
    document.getElementById("detailEkspedisi").textContent =
        pesanan.ekspedisi;

    document.getElementById("detailTanggal").textContent =
        pesanan.tanggalKirim;

    document.getElementById("detailPaket").textContent =
        pesanan.jenisPaket;

    document.getElementById("detailTotal").textContent =
        formatRupiah(pesanan.total);


    // Progress pengiriman
    const progressFill = document.getElementById("progressFill");

    if (pesanan.status === "Pesanan Diproses") {

        progressFill.style.width = "33%";

        progressFill.style.backgroundColor = "#f59e0b";

    } else if (pesanan.status === "Dalam Pengiriman") {

        progressFill.style.width = "66%";

        progressFill.style.backgroundColor = "#2563eb";

    } else if (pesanan.status === "Selesai") {

        progressFill.style.width = "100%";

        progressFill.style.backgroundColor = "#16a34a";

    }

}
