// data_sdk.js
// SDK untuk berinteraksi dengan 10 tabel akademik di Supabase.

// --- KONSTANTA GLOBAL ---
// Catatan: Ini harus diinisialisasi sekali saja.
const SUPABASE_URL = 'https://hesmzzxagxnttjmismvc.supabase.co';
// HATI-HATI: Kunci ini TIDAK BOLEH disebar jika menggunakan Service Role Key
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlc216emhhZ3hudHRqbWlzbXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NTA2OTMsImV4cCI6MTk3MTUyNjY5M30.b8nFjT06D37t4F1Q6H4z7lJ7c1I4z3O8q7G9L7V0s3Y';
let supabaseClient = null;


// --- INISIALISASI KLIEN ---

function createClient() {
  if (window.supabase) {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return null;
}

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

// ----------------------------------------------------------------------
// --- FUNGSI UMUM (CREATE/INSERT) ---
// Note: Fungsi 'create' ini sudah sangat baik dan menggantikan 'insertStudent'
// ----------------------------------------------------------------------

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
// (Fungsi fetchAll tidak perlu diubah)

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
      .order('created_at', { ascending: false });

    return { data: data || [], error };
  } catch (err) {
    console.error(`Fetch error for ${tableName}:`, err);
    return { data: [], error: { message: `Fetch error: ${err.message}` } };
  }
}

// ----------------------------------------------------------------------
// --- FUNGSI GET SPESIFIK UNTUK 10 TABEL AKADEMIK ---
// (Semua fungsi ini menggunakan fetchAll dan sudah benar)
// ----------------------------------------------------------------------

// ... (Semua fungsi getXxx Anda di sini)

async function getSiswa() {
    return fetchAll('siswa');
}

// ... (Fungsi get lainnya)


// --- FUNGSI KHUSUS UNTUK MEMASUKKAN SISWA ---
// Note: Fungsi ini hanya perlu memanggil fungsi 'create' yang sudah umum
export async function insertStudent(studentData) {
    return create('siswa', studentData);
}


// --- EXPORT FUNGSI ---

// Note: Tambahkan insertStudent ke window.dataSdk jika Anda ingin memanggilnya dari luar
window.dataSdk = {
  init,
  create, 
  insertStudent, // Ditambahkan agar bisa diakses

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