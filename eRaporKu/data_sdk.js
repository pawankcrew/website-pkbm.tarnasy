// data_sdk.js  
// SDK untuk berinteraksi dengan tabel Supabase (seperti siswa, dsb)  

// -----------------------------  
// KONFIGURASI SUPABASE  
// -----------------------------  
const SUPABASE_URL = 'https://hesmzzxagxnttjmismvc.supabase.co';  
// Pastikan ini adalah anon key, bukan service role
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlc216emhhZ3hudHRqbWlzbXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU5NTA2OTMsImV4cCI6MTk3MTUyNjY5M30.b8nFjT06D37t4F1Q6H4z7lJ7c1I4z3O8q7G9L7V0s3Y';

// Supabase client global
let supabaseClient = null;

/**
 * Inisialisasi Supabase JS SDK dengan menunggu script dimuat
 * Harus dipanggil sekali sebelum fungsi create / fetchAll
 */
async function init() {
  return new Promise((resolve, reject) => {
    // Jika sudah ada supabase di window, cukup buat client
    if (window.supabase) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      return resolve({ isOk: true });
    }

    // Jika belum ada, load skrip secara dinamis
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';
    script.onload = () => {
      // Setelah script Supabase dimuat, buat client
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('Supabase SDK dimuat dan client siap');
      resolve({ isOk: true });
    };
    script.onerror = (err) => {
      console.error('Gagal memuat Supabase SDK:', err);
      reject({ isOk: false, message: 'Failed to load Supabase SDK' });
    };
    document.head.appendChild(script);
  });
}

/**
 * Fungsi umum untuk menyisipkan data ke tabel Supabase
 * @param {string} tableName - nama tabel di Supabase
 * @param {object} payload - objek data untuk disimpan
 */
async function createRecord(tableName, payload) {
  if (!supabaseClient) {
    console.error('Supabase client belum diinisialisasi');
    return { isOk: false, message: 'Client not initialized' };
  }

  try {
    console.log(`Mencoba insert ke tabel "${tableName}" dengan payload:`, payload);
    const { data, error } = await supabaseClient
      .from(tableName)
      .insert([payload])
      .select();  // memakai select() untuk mendapatkan row yang baru

    if (error) {
      console.error(`Error inserting ke tabel ${tableName}:`, error);
      return { isOk: false, message: error.message, error };
    }

    console.log(`Insert ke ${tableName} berhasil, row:`, data);
    return { isOk: true, data: data[0] };
  } catch (err) {
    console.error('Kesalahan tak terduga saat createRecord:', err);
    return { isOk: false, message: 'Unknown error', error: err };
  }
}

/**
 * Fungsi umum mengambil semua data dari tabel tertentu
 * @param {string} tableName
 */
async function fetchAll(tableName) {
  if (!supabaseClient) {
    console.error('Supabase client belum diinisialisasi (fetchAll)');
    return { data: null, error: { message: 'Client not initialized' } };
  }

  try {
    const { data, error } = await supabaseClient
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error(`Error fetchAll dari ${tableName}:`, error);
      return { data: null, error };
    }

    return { data: data, error: null };
  } catch (err) {
    console.error('Kesalahan tak terduga saat fetchAll:', err);
    return { data: null, error: { message: err.message } };
  }
}

// Contoh fungsi khusus (siswa), bisa ditambah untuk tabel lain
async function insertStudent(studentData) {
  return await createRecord('siswa', studentData);
}

async function getSiswa() {
  return await fetchAll('siswa');
}

// Export fungsi ke global (window.dataSdk) agar bisa dipakai dari element_sdk atau skrip lain
window.dataSdk = {
  init,
  createRecord,
  insertStudent,
  fetchAll,
  getSiswa,
  // Tambahkan fungsi lain sesuai kebutuhan:
  // getProfilUser,
  // getDataLembaga,
  // getKelas,
  // dsb.
};