// element_sdk.js
// SDK yang menangani interaksi pengguna dan menghubungkannya ke data_sdk.js

// Asumsi: Berkas data_sdk.js mengekspor semua fungsi melalui window.dataSdk
// Kita akan menggunakan alias agar kode lebih rapi.

const dataSdk = window.dataSdk;

// 1. Fungsi untuk menampilkan data siswa ke tabel (Asumsi ID tabel body = 'siswa-table-body')
function renderStudentTable(students) {
    const tableBody = document.getElementById('siswa-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = ''; // Kosongkan tabel lama

    if (!students || students.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="9" style="text-align: center;">Tidak ada data siswa.</td></tr>';
        return;
    }

    students.forEach((siswa, index) => {
        const row = tableBody.insertRow();
        row.insertCell().textContent = index + 1; // NO
        row.insertCell().textContent = siswa.nisn || '';
        row.insertCell().textContent = siswa.nipd || '';
        row.insertCell().textContent = siswa.nama_lengkap || '';
        row.insertCell().textContent = siswa.kelas || ''; // Menggunakan kolom 'kelas'
        row.insertCell().textContent = siswa.jk || '';
        // Tambahkan kolom lain sesuai struktur tabel Anda

        // Tombol Aksi
        const actionCell = row.insertCell();
        actionCell.innerHTML = `<a href="#" onclick="handleEdit('${siswa.nisn}')">Edit</a> | <a href="#" onclick="handleDelete('${siswa.nisn}')">Hapus</a>`;
    });
}


// 2. Fungsi untuk memuat dan menampilkan data saat halaman dimuat
async function loadSiswaData() {
    if (!dataSdk || !dataSdk.getSiswa) {
        console.error('Data SDK belum terinisialisasi atau getSiswa tidak ditemukan.');
        return;
    }
    
    console.log('Memuat data siswa dari Supabase...');
    // Memanggil fungsi getSiswa dari data_sdk.js
    const { data: siswaData, error } = await dataSdk.getSiswa(); 

    if (error) {
        console.error('Gagal memuat data siswa:', error.message);
        alert('Gagal memuat data: ' + error.message);
        return;
    }

    renderStudentTable(siswaData);
    console.log(`Berhasil memuat ${siswaData.length} siswa.`);
}


// 3. Fungsi untuk menangani penambahan siswa dari formulir (Sesuai dengan HTML Anda)
async function handleTambahSiswa(event) {
    event.preventDefault(); // Mencegah reload halaman default

    if (!dataSdk || !dataSdk.insertStudent) {
        console.error('Fungsi insertStudent tidak ditemukan di Data SDK.');
        alert('Fitur tambah data belum siap. Cek Data SDK.');
        return;
    }

    // Ambil data dari elemen formulir menggunakan event.target
    const form = event.target;
    
    // Objek data yang akan dikirim ke Supabase
    const studentData = {
        // Nama kolom DB : Nilai dari form HTML
        nisn: form.nisn.value || null, // Diizinkan NULL
        nipd: form.nipd.value || null, // Diizinkan NULL
        
        // PERBAIKAN: Form menggunakan name="nama", DB menggunakan nama_lengkap
        nama_lengkap: form.nama.value, 
        
        jk: form.jk.value,
        agama: form.agama.value,
        tempat_lahir: form.tempat_lahir.value,
        tanggal_lahir: form.tanggal_lahir.value,
        nik: form.nik.value || null,
        
        // PERBAIKAN: Form menggunakan name="kelas", DB menggunakan kelas
        kelas: form.kelas.value, 
    };

    console.log('Mencoba memasukkan data siswa:', studentData);

    // Panggil fungsi INSERT dari data_sdk.js (menggunakan insertStudent)
    const result = await dataSdk.insertStudent(studentData);

    if (result.success) {
        alert('✅ Siswa berhasil ditambahkan dan disimpan ke Supabase!');
        form.reset(); // Kosongkan formulir
        // Sembunyikan modal setelah submit berhasil
        const modal = document.getElementById('modal-siswa');
        if (modal) modal.classList.add('hidden'); 
        
        loadSiswaData(); // Muat ulang data siswa di tabel
    } else {
        // Pesan error dari Supabase (kemungkinan RLS, NOT NULL, atau Tipe Data)
        alert(`❌ Gagal menambahkan siswa! Error: ${result.error}. Pastikan RLS dan NOT NULL sudah diatur.`);
    }
}


// 4. Inisialisasi utama (Dipanggil saat seluruh elemen halaman dimuat)
window.onload = async () => {
    // 4.1 Inisialisasi Supabase
    if (dataSdk && dataSdk.init) {
        const initResult = await dataSdk.init();
        if (!initResult.isOk) {
            console.error('Inisialisasi Supabase gagal!');
            // Tampilkan pesan error di UI jika perlu
        } else {
            console.log('Supabase client siap.');
        }
    }

    // 4.2 Hubungkan event listener ke formulir 'Tambah Siswa'
    // ID form di HTML Anda adalah 'form-siswa'
    const form = document.getElementById('form-siswa'); 
    if (form) {
        form.addEventListener('submit', handleTambahSiswa);
    } else {
        console.warn('Elemen form-siswa tidak ditemukan. Fitur tambah siswa tidak aktif.');
    }

    // 4.3 Tambahkan Event Listener untuk tombol buka modal (Jika ada)
    const btnTambahSiswa = document.getElementById('btnTambahSiswa');
    if (btnTambahSiswa) {
        btnTambahSiswa.addEventListener('click', () => {
            const modal = document.getElementById('modal-siswa');
            if (modal) modal.classList.remove('hidden');
        });
    }

    // 4.4 Muat data siswa
    loadSiswaData();
};