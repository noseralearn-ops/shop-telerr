document.getElementById('orderForm').addEventListener('submit', function(e) {
    // Mencegah halaman reload saat submit
    e.preventDefault();

    // Mengambil nilai dari input
    const nama = document.getElementById('nama').value;
    const pesanan = document.getElementById('pesanan').value;
    const catatan = document.getElementById('catatan').value;

    // Menyiapkan elemen hasil
    const resultBox = document.getElementById('result');
    const displayData = document.getElementById('displayData');

    // Mengisi konten hasil
    displayData.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Pesanan:</strong> ${pesanan}</p>
        <p><strong>Catatan:</strong> ${catatan ? catatan : '-'}</p>
    `;

    // Menampilkan kotak hasil
    resultBox.style.display = 'block';

    // Reset form setelah kirim
    document.getElementById('orderForm').reset();

    // Otomatis scroll ke bawah agar hasil terlihat
    resultBox.scrollIntoView();
});
