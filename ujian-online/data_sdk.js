// data_sdk.js
// Ini adalah "jembatan" yang menghubungkan aplikasi Anda dengan Supabase.

// GANTI DENGAN DATA DARI SUPABASE ANDA
const SUPABASE_URL = 'https://hesmzzxagxnttjmismvc.supabase.co'; // Ganti dengan URL Project Supabase Anda
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlc216enhhZ3hudHRqbWlzbXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4OTU4OTcsImV4cCI6MjA3ODQ3MTg5N30.Jgjcj3V0eCOd3J4bjO1sjmVxJWST1MN5n1mjQDyQkIs'; // Ganti dengan Anon Key Anda

// Fungsi untuk membuat koneksi ke Supabase
function createClient() {
  // Kita menggunakan library Supabase yang di-load dari CDN
  if (window.supabase) {
    return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return null;
}

let supabaseClient = null;
let dataHandler = null;

// Fungsi utama untuk menginisialisasi SDK
async function init(handler) {
  dataHandler = handler;
  // Load library Supabase dari CDN jika belum ada
  if (!window.supabase) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js';
    script.onload = () => {
      supabaseClient = createClient();
      if (supabaseClient) {
        fetchData();
      }
    };
    document.head.appendChild(script);
  } else {
    supabaseClient = createClient();
    if (supabaseClient) {
      fetchData();
    }
  }
  return { isOk: true };
}

// Fungsi untuk mengambil semua data dari Supabase
async function fetchData() {
  if (!supabaseClient || !dataHandler) return;

  try {
    // Mengambil semua data dari tabel 'ujian_results'
    // Anda perlu membuat tabel ini di Supabase
    const { data, error } = await supabaseClient
      .from('ujian_results')
      .select('*')
      .order('waktu_selesai', { ascending: false });

    if (error) {
      console.error('Error fetching data:', error);
      // Jika tabel belum ada, biarkan kosong dulu
      dataHandler.onDataChanged([]);
    } else {
      dataHandler.onDataChanged(data || []);
    }
  } catch (err) {
    console.error('Fetch error:', err);
    dataHandler.onDataChanged([]);
  }
}

// Fungsi untuk membuat/menyimpan data baru (misal: hasil ujian)
async function create(payload) {
  if (!supabaseClient) {
    return { isOk: false, message: 'Supabase client not initialized' };
  }

  try {
    const { data, error } = await supabaseClient
      .from('ujian_results')
      .insert([payload]);

    if (error) {
      console.error('Error creating data:', error);
      return { isOk: false, message: error.message };
    }

    // Setelah berhasil menyimpan, ambil ulang semua data
    fetchData();
    return { isOk: true, data };
  } catch (err) {
    console.error('Create error:', err);
    return { isOk: false, message: 'An unknown error occurred' };
  }
}

// Export fungsi-fungsi agar bisa dipanggil dari file utama
window.dataSdk = {
  init,
  create
};