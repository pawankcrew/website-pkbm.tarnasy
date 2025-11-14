// data_sdk.js
// SDK untuk berinteraksi dengan 10 tabel akademik di Supabase.

// GANTI DENGAN DATA DARI SUPABASE ANDA
const SUPABASE_URL = 'https://kzthtvxbqynzqtexlaiz.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6dGh0dnhicXluenF0ZXhsYWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4OTgwMzEsImV4cCI6MjA3ODQ3NDAzMX0.usX65m33QyFmWPaLsxGQ4Hc9Khg8yw1vvcMU6CZ9FTY'; 

// --- INISIALISASI KLIEN ---

function createClient() {
  if (window.supabase) {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return null;
}

let supabaseClient = null;

async function init() {
  if (!window.supabase) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';
    script.onload = () => {
      supabaseClient = createClient();
    };
    document.head.appendChild(script);
  } else {
    supabaseClient = createClient();
  }
  return { isOk: true };
}

// --- FUNGSI UMUM (CREATE/INSERT) ---

/**
 * Fungsi umum untuk menyisipkan data baru ke tabel mana pun.
 * @param {string} tableName - Nama tabel Supabase yang dituju.
 * @param {object} payload - Objek data yang akan disisipkan.
 * @returns {Promise<object>} Objek hasil { isOk, data, message }.
 */
async function create(tableName, payload) {
  if (!supabaseClient) {
    return { isOk: false, message: 'Supabase client not initialized' };
  }

  try {
    const { data, error } = await supabaseClient
      .from(tableName)
      .insert([payload])
      .select(); 

    if (error) {
      console.error(`Error creating data for ${tableName}:`, error);
      return { isOk: false, message: error.message };
    }

    return { isOk: true, data: data[0] };
  } catch (err) {
    console.error('Create error:', err);
    return { isOk: false, message: 'An unknown error occurred during creation' };
  }
}

// --- FUNGSI UMUM UNTUK MENGAMBIL SEMUA DATA (READ) ---

/**
 * Fungsi umum untuk mengambil semua data dari tabel tertentu.
 * @param {string} tableName - Nama tabel Supabase.
 * @returns {Promise<object>} Objek hasil { data, error }.
 */
async function fetchAll(tableName) {
  if (!supabaseClient) {
    return { data: null, error: { message: 'Supabase client not initialized' } };
  }
    
  try {
      const { data, error } = await supabaseClient
          .from(tableName)
          .select('*')
          .order('created_at', { ascending: false }); // Menggunakan created_at sebagai default order

      return { data: data || [], error };
  } catch (err) {
      console.error(`Fetch error for ${tableName}:`, err);
      return { data: [], error: { message: `Fetch error: ${err.message}` } };
  }
}

// --- FUNGSI GET SPESIFIK UNTUK 10 TABEL AKADEMIK ---

// 1. Profil Pengguna (Koneksi Auth & Role)
async function getProfilUser() {
    return fetchAll('profil_user');
}

// 2. Data Lembaga (Pengaturan Sekolah)
async function getDataLembaga() {
    return fetchAll('data_lembaga');
}

// 3. Data Akademik (Tahun Ajaran & Semester)
async function getDataAkademik() {
    return fetchAll('data_akademik');
}

// 4. Kelas (Paket A, B, C)
async function getKelas() {
    return fetchAll('kelas');
}

// 5. Mata Pelajaran
async function getMataPelajaran() {
    return fetchAll('mata_pelajaran');
}

// 6. Tutor (Manajemen Guru/Pengajar)
async function getTutor() {
    return fetchAll('tutor');
}

// 7. Siswa (Manajemen Siswa)
async function getSiswa() {
    // Fungsi ini mungkin perlu join/relasi di masa depan, tapi sekarang pakai fetchAll
    return fetchAll('siswa');
}

// 8. Ekstrakurikuler (Daftar Master Ekskul)
async function getEkstrakurikuler() {
    return fetchAll('ekstrakurikuler');
}

// 9. Nilai Rapor (Nilai Akhir Mata Pelajaran)
async function getNilaiRapor() {
    // Note: Anda mungkin ingin melakukan JOIN dengan tabel 'siswa' dan 'mata_pelajaran'
    if (!supabaseClient) return { data: null, error: { message: 'Client not initialized' } };
    
    // Contoh query JOIN sederhana menggunakan 'select' dengan relasi
    const { data, error } = await supabaseClient
        .from('nilai_rapor')
        .select(`
            *,
            siswa (nisn, nama_siswa),
            mata_pelajaran (nama_mapel, kode_mapel)
        `)
        .order('created_at', { ascending: false });

    return { data: data || [], error };
}

// 10. Nilai Ekstrakurikuler Siswa
async function getNilaiEkskul() {
    // Contoh query JOIN
    if (!supabaseClient) return { data: null, error: { message: 'Client not initialized' } };
    const { data, error } = await supabaseClient
        .from('nilai_ekskul')
        .select(`
            *,
            siswa (nisn, nama_siswa),
            ekstrakurikuler (nama_ekskul)
        `)
        .order('created_at', { ascending: false });

    return { data: data || [], error };
}


// --- EXPORT FUNGSI ---

window.dataSdk = {
  init,
  create, // Fungsi create umum untuk semua tabel

  // Fungsi GET spesifik untuk 10 tabel
  getProfilUser,
  getDataLembaga,
  getDataAkademik,
  getKelas,
  getMataPelajaran,
  getTutor,
  getSiswa,
  getEkstrakurikuler,
  getNilaiRapor,
  getNilaiEkskul,
};