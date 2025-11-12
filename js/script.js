// Fungsi untuk membuat nomor urut dengan leading zero (contoh: 001, 002)
function pad(num, size) {
    let s = String(num);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}

// --- LOGIKA UNTUK FOTO (PERBAIKAN BUG) ---
// Array untuk menyimpan file yang dipilih
let selectedFiles = [];

// Event listener untuk input file foto
document.getElementById('photo-upload').addEventListener('change', function(event) {
    // Simpan file yang dipilih ke array, maksimal 3
    selectedFiles = Array.from(event.target.files).slice(0, 3);
});

function fillAndPreview() {
    // --- AMBIL DATA DARI FORM INPUT ---
    const tahunAjaran = document.getElementById('tahun_ajaran').value;
    const nisn = document.getElementById('nisn').value;
    const nik = document.getElementById('nik').value;
    const nama = document.getElementById('nama').value;
    const ttl = document.getElementById('ttl').value;
    const anakKe = document.getElementById('anak_ke').value;
    const statusKeluarga = document.getElementById('status_keluarga').value;
    const alamat = document.getElementById('alamat').value;
    const rt = document.getElementById('rt').value;
    const rw = document.getElementById('rw').value;
    const desa = document.getElementById('desa').value;
    const kecamatan = document.getElementById('kecamatan').value;
    const hp = document.getElementById('hp').value;
    const sekolah = document.getElementById('sekolah_asal').value;
    const tahunSekolah = document.getElementById('tahun_sekolah').value;
    const diterimaKelas = document.getElementById('diterima_kelas').value;
    const ayah = document.getElementById('nama_ayah').value;
    const ibu = document.getElementById('nama_ibu').value;

    const jkElement = document.querySelector('input[name="jenis_kelamin"]:checked');
    const jk = jkElement ? jkElement.value : '';
    
    const jalurElement = document.querySelector('input[name="jalur"]:checked');
    const jalur = jalurElement ? jalurElement.value : '';

    const kodePaketElement = document.querySelector('input[name="kode_paket"]:checked');
    const kodePaket = kodePaketElement ? kodePaketElement.value : '';

    // --- LOGIKA NOMOR REGISTRASI OTOMATIS ---
    let lastNumber = localStorage.getItem('lastRegistrationNumber');
    let currentNumber = (lastNumber === null) ? 1 : parseInt(lastNumber) + 1;
    const formattedRegNumber = pad(currentNumber, 3);

    // --- ISI DATA KE DALAM TEMPLATE CETAK ---
    document.getElementById('cetak_tahun_ajaran').innerText = tahunAjaran;
    document.getElementById('cetak_no_reg').innerText = formattedRegNumber;
    document.getElementById('cetak_nisn').innerText = nisn;
    document.getElementById('cetak_nik').innerText = nik;
    document.getElementById('cetak_nama').innerText = nama.toUpperCase();
    document.getElementById('cetak_jk').innerText = jk;
    document.getElementById('cetak_ttl').innerText = ttl;
    document.getElementById('cetak_anak_ke').innerText = anakKe;
    document.getElementById('cetak_status_keluarga').innerText = statusKeluarga;
    document.getElementById('cetak_alamat').innerText = alamat;
    document.getElementById('cetak_rt_rw').innerText = `${rt} / ${rw}`;
    document.getElementById('cetak_desa').innerText = desa;
    document.getElementById('cetak_kecamatan').innerText = kecamatan;
    document.getElementById('cetak_hp').innerText = hp;
    document.getElementById('cetak_sekolah').innerText = sekolah;
    document.getElementById('cetak_tahun_sekolah').innerText = tahunSekolah;
    document.getElementById('cetak_diterima_kelas').innerText = diterimaKelas;
    document.getElementById('cetak_ayah').innerText = ayah;
    document.getElementById('cetak_ibu').innerText = ibu;
    document.getElementById('cetak_ttd_wali').innerText = `${ayah} / ${ibu}`;
    document.getElementById('cetak_ttd_pendaftar').innerText = nama.toUpperCase(); // TTD pendaftar adalah nama siswa

    // --- LOGIKA UNTUK CHECKBOX ---
    const checkboxReguler = document.getElementById('cetak_reguler');
    const checkboxPrestasi = document.getElementById('cetak_prestasi');
    checkboxReguler.classList.remove('checked');
    checkboxPrestasi.classList.remove('checked');
    if (jalur === 'Reguler') checkboxReguler.classList.add('checked');
    else if (jalur === 'Prestasi') checkboxPrestasi.classList.add('checked');

    const checkboxPaketB = document.getElementById('cetak_paket_b');
    const checkboxPaketC = document.getElementById('cetak_paket_c');
    checkboxPaketB.classList.remove('checked');
    checkboxPaketC.classList.remove('checked');
    if (kodePaket === 'B') checkboxPaketB.classList.add('checked');
    else if (kodePaket === 'C') checkboxPaketC.classList.add('checked');

    // --- LOGIKA UNTUK MENAMPILKAN FOTO (PERBAIKAN UTAMA) ---
    // Gunakan Promise untuk memastikan semua foto selesai dibaca sebelum preview ditampilkan
    const photoPromises = selectedFiles.map(file => {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null); // Jika tidak ada file, kembalikan null
                return;
            }
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    });

    Promise.all(photoPromises).then(photoDataUrls => {
        // Setelah semua foto selesai dibaca, tampilkan di preview
        for (let i = 0; i < 3; i++) {
            const photoElement = document.getElementById(`photo-preview-${i + 1}`);
            if (photoDataUrls[i]) {
                photoElement.src = photoDataUrls[i];
            } else {
                // Kembalikan ke gambar placeholder kosong jika tidak ada foto
                photoElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
            }
        }

        // --- TAMPILKAN PREVIEW, SEMBUNYIKAN FORM INPUT ---
        // Baru tampilkan preview setelah foto diproses
        document.getElementById('input-form-section').style.display = 'none';
        document.getElementById('printable-area').style.display = 'block';

        // --- SIMPAN NOMOR TERAKHIR KE LOCAL STORAGE ---
        localStorage.setItem('lastRegistrationNumber', currentNumber.toString());
    }).catch(error => {
        console.error("Error reading photos:", error);
        // Tetap tampilkan preview meskipun foto gagal
        document.getElementById('input-form-section').style.display = 'none';
        document.getElementById('printable-area').style.display = 'block';
        localStorage.setItem('lastRegistrationNumber', currentNumber.toString());
    });
}

function printForm() {
    window.print();
}

function backToForm() {
    document.getElementById('printable-area').style.display = 'none';
    document.getElementById('input-form-section').style.display = 'block';
}