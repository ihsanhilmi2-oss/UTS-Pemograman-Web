
/* =================================
   CHECKOUT BOOKSTORE
================================= */

// Mengambil data buku dari localStorage
let bukuPilihan = JSON.parse(
    localStorage.getItem("bukuPilihan")
);

// Mengambil elemen HTML
const checkoutItem = document.getElementById("checkoutItem");
const totalHarga = document.getElementById("totalHarga");

// Format harga Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(angka);
}


// =================================
// MENAMPILKAN BUKU CHECKOUT
// =================================

function tampilkanCheckout() {

    checkoutItem.innerHTML = "";

    if (!bukuPilihan) {

        checkoutItem.innerHTML = `
            <tr>
                <td colspan="5">
                    Belum ada buku yang dipilih.
                    Silakan kembali ke katalog.
                </td>
            </tr>
        `;

        totalHarga.textContent = "Rp 0";
        return;
    }

    const baris = document.createElement("tr");

    baris.innerHTML = `
        <td>${bukuPilihan.judul}</td>
        <td>${bukuPilihan.penulis}</td>
        <td>${formatRupiah(bukuPilihan.harga)}</td>

        <td>
            <input
                type="number"
                id="jumlahBeli"
                value="1"
                min="1"
                max="${bukuPilihan.stok}"
                style="width: 75px; padding: 8px;"
            >
        </td>

        <td id="subtotal">
            ${formatRupiah(bukuPilihan.harga)}
        </td>
    `;

    checkoutItem.appendChild(baris);

    document.getElementById("jumlahBeli")
        .addEventListener("input", hitungTotal);

    hitungTotal();

}


// =================================
// MENGHITUNG TOTAL PEMBAYARAN
// =================================

function hitungTotal() {

    if (!bukuPilihan) return;

    const jumlahInput = document.getElementById("jumlahBeli");

    let jumlah = Number(jumlahInput.value);

    if (!Number.isInteger(jumlah) || jumlah < 1) {
        jumlah = 1;
    }

    if (jumlah > bukuPilihan.stok) {
        jumlah = bukuPilihan.stok;
    }

    jumlahInput.value = jumlah;

    const subtotal = bukuPilihan.harga * jumlah;

    document.getElementById("subtotal").textContent =
        formatRupiah(subtotal);

    totalHarga.textContent = formatRupiah(subtotal);

    return {
        jumlah: jumlah,
        subtotal: subtotal
    };

}


// =================================
// KONFIRMASI PESANAN
// =================================

document.getElementById("checkoutForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    if (!bukuPilihan) {
        alert("Silakan pilih buku terlebih dahulu.");
        return;
    }

    const nama = document.getElementById("namaPemesan").value.trim();
    const email = document.getElementById("emailPemesan").value.trim();
    const telepon = document.getElementById("teleponPemesan").value.trim();
    const alamat = document.getElementById("alamatPemesan").value.trim();
    const pembayaran = document.getElementById("metodePembayaran").value;

    if (!nama || !email || !telepon || !alamat || !pembayaran) {
        alert("Semua informasi pemesan wajib diisi.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Format email tidak valid.");
        return;
    }

    const hasil = hitungTotal();

    // Cari buku asli di data katalog
    const bukuAsli = dataKatalogBuku.find(function(item) {
        return item.id === bukuPilihan.id;
    });

    if (!bukuAsli || hasil.jumlah > bukuAsli.stok) {
        alert("Stok buku tidak mencukupi.");
        return;
    }

    // Membuat nomor Delivery Order
    const nomorDO = "DO" + Date.now();

    // Membuat data transaksi
    const transaksiBaru = {
        nomorDO: nomorDO,
        nama: nama,
        email: email,
        telepon: telepon,
        alamat: alamat,
        judulBuku: bukuPilihan.judul,
        jumlah: hasil.jumlah,
        total: hasil.subtotal,
        pembayaran: pembayaran,
        ekspedisi: "JNE",
        tanggalKirim: new Date().toLocaleDateString("id-ID"),
        jenisPaket: "Reguler",
        status: "Pesanan Diproses"
    };

    // Mengurangi stok buku
    bukuAsli.stok -= hasil.jumlah;

    // Menyimpan transaksi
    let daftarTransaksi = JSON.parse(
        localStorage.getItem("dataPesanan")
    ) || [];

    daftarTransaksi.push(transaksiBaru);

    localStorage.setItem(
        "dataPesanan",
        JSON.stringify(daftarTransaksi)
    );

    // Menyimpan perubahan stok
    localStorage.setItem(
        "dataKatalogBuku",
        JSON.stringify(dataKatalogBuku)
    );

    alert(
        "Pesanan berhasil dibuat!\n\n" +
        "Nomor DO: " + nomorDO + "\n" +
        "Nama: " + nama + "\n" +
        "Total: " + formatRupiah(hasil.subtotal)
    );

    // Menghapus pilihan buku
    localStorage.removeItem("bukuPilihan");

    // Mengarahkan ke halaman tracking
    window.location.href = "tracking.html";

});


// =================================
// JALANKAN CHECKOUT
// =================================

tampilkanCheckout();
