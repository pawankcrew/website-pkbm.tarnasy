// element_sdk.js

// 1. Impor fungsi dari data_sdk.js
// Kita impor fungsi yang dibutuhkan: init (untuk koneksi) dan insertStudent
import { init as initSupabase, getSiswa, insertStudent } from './data_sdk.js';


// 2. Fungsi untuk menampilkan data siswa ke tabel (Konsep)
function renderStudentTable(students) {
    const tableBody = document.getElementById('siswa-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = ''; // Kosongkan tabel lama

    if (students.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="9" style="text-align: center;">Tidak ada data siswa.</td></tr>';
        return;
    }

    students.forEach((siswa, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = index + 1; // NO
        row.insertCell().textContent = siswa.nisn || '';
        row.insertCell().textContent = siswa.nipd || '';
        row.insertCell().textContent = siswa.nama_lengkap || '';
        row.insertCell().textContent = siswa.rombel || '';
        row.insertCell().textContent = siswa.jk || '';
        row.insertCell().textContent = siswa.status_naik || '';
        
        // Tombol Aksi (Edit/Hapus)
        const actionCell = row.insertCell();
        actionCell.innerHTML = `<a href="#" onclick="handleEdit('${siswa.nisn}')">Edit</a> | <a href="#" onclick="handleDelete('${siswa.nisn}')">Hapus</a>`;
    });
}


// 3. Fungsi untuk memuat dan menampilkan data saat halaman dimuat
async function loadSiswaData() {
    console.log('Memuat data siswa dari Supabase...');
    const { data: siswaData, error } = await getSiswa();

    if (error) {
        console.error('Gagal memuat data siswa:', error.message);
        // Tampilkan pesan error di halaman
        alert('Gagal memuat data: ' + error.message);
        return;
    }

    // Panggil fungsi untuk merender data
    renderStudentTable(siswaData);
    console.log(`Berhasil memuat ${siswaData.length} siswa.`);
}


// 4. Fungsi untuk menangani penambahan siswa dari formulir
async function handleTambahSiswa(event) {
    event.preventDefault(); // Mencegah reload halaman default

    // (A) Ambil data dari elemen formulir
    const form = event.target;
    const studentData = {
        nisn: form.nisn.value,
        nipd: form.nipd.value,
        nama_lengkap: form.nama_lengkap.value,
        rombel: form.rombel.value,
        jk: form.jk.value,
        status_naik: form.status_naik.value,
        // Pastikan semua field formulir terdaftar di sini!
    };

    console.log('Mencoba memasukkan data siswa:', studentData);

    // (B) Panggil fungsi INSERT dari data_sdk.js
    const result = await insertStudent(studentData);

    if (result.success) {
        alert('✅ Siswa berhasil ditambahkan dan disimpan ke Supabase!');
        form.reset(); // Kosongkan formulir
        loadSiswaData(); // Muat ulang data siswa di tabel
    } else {
        // Ini adalah tempat munculnya error RLS (izin) jika Supabase memblokirnya
        alert(`❌ Gagal menambahkan siswa! Pastikan RLS Policy (izin INSERT) di Supabase sudah diatur dengan benar. Error: ${result.error}`);
    }
}


// 5. Inisialisasi utama (Dipanggil saat seluruh elemen halaman dimuat)
window.onload = async () => {
    // 5.1 Inisialisasi Supabase
    const initResult = await initSupabase();
    if (!initResult.isOk) {
        console.error('Inisialisasi Supabase gagal!');
        return;
    }

    // 5.2 Hubungkan event listener ke formulir
    const form = document.getElementById('formTambahSiswa'); 
    if (form) {
        form.addEventListener('submit', handleTambahSiswa);
    } else {
        console.warn('Elemen formTambahSiswa tidak ditemukan. Fitur tambah siswa tidak aktif.');
    }

    // 5.3 Muat data siswa
    loadSiswaData();
};