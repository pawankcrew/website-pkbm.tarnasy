// element_sdk.js
// Menghubungkan elemen HTML (form/input/button) ke fungsi SDK Supabase (dataSdk)

// Pastikan dataSdk sudah dimuat
if (!window.dataSdk) {
  console.error("dataSdk belum dimuat, harap load data_sdk.js sebelum file ini.");
}

// Helper: Ambil nilai elemen berdasarkan id
function getValue(id) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`Elemen dengan id "${id}" tidak ditemukan`);
    return null;
  }
  return el.value.trim();
}

// Helper: Set nilai elemen
function setValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

// Helper: Tampilkan pesan ke user
function showMessage(message, type = "info") {
  alert(`${type.toUpperCase()}: ${message}`);
}

// ------------------------------------------------------------
// FORM HANDLER: TAMBAH SISWA
// ------------------------------------------------------------
async function submitStudentForm() {
  try {
    await dataSdk.init(); // memastikan supabase siap

    const nama = getValue("nama");
    const nisn = getValue("nisn");
    const ttl = getValue("ttl");
    const alamat = getValue("alamat");

    // Validasi minimal
    if (!nama || !nisn) {
      return showMessage("Nama dan NISN wajib diisi", "error");
    }

    const payload = {
      nama,
      nisn,
      ttl,
      alamat,
      created_at: new Date().toISOString()
    };

    const result = await dataSdk.insertStudent(payload);

    if (!result.isOk) {
      console.error("Gagal menyimpan siswa:", result);
      return showMessage("Gagal menyimpan: " + result.message, "error");
    }

    showMessage("Data siswa berhasil disimpan", "success");

    // Reset form
    setValue("nama", "");
    setValue("nisn", "");
    setValue("ttl", "");
    setValue("alamat", "");

  } catch (err) {
    console.error("Kesalahan submitStudentForm:", err);
    showMessage("Terjadi kesalahan tidak diketahui", "error");
  }
}

// ------------------------------------------------------------
// GENERIC FORM HANDLER (untuk tiap tabel lain jika dibutuhkan)
// ------------------------------------------------------------
async function submitGenericForm(tableName, fieldList) {
  try {
    await dataSdk.init();

    const payload = {};

    // Ambil semua field
    fieldList.forEach((id) => {
      const val = getValue(id);
      payload[id] = val;
    });

    // Tambahkan timestamp jika perlu
    payload.created_at = new Date().toISOString();

    const result = await dataSdk.createRecord(tableName, payload);

    if (!result.isOk) {
      console.error(`Gagal insert ke tabel ${tableName}:`, result);
      return showMessage(result.message, "error");
    }

    showMessage(`Data berhasil disimpan ke tabel ${tableName}`, "success");

  } catch (err) {
    console.error("Kesalahan submitGenericForm:", err);
    showMessage("Terjadi kesalahan internal", "error");
  }
}

// ------------------------------------------------------------
// EXPORT KE GLOBAL
// ------------------------------------------------------------
window.elementSdk = {
  getValue,
  setValue,
  submitStudentForm,
  submitGenericForm
};