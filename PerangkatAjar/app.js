/*
================================================================
A P P . J S   V E R S I   3.1   ( U P G R A D E :  Download as Word )
================================================================
*/

// ==========================================================
// PUSTAKA KURIKULUM (Aturan Dropdown)
// ==========================================================
const PUSTAKA_KURIKULUM = {
    "Paket A": {
        "fase": [
            { id: "A", nama: "Fase A (Kelas 1-2)" },
            { id: "B", nama: "Fase B (Kelas 3-4)" },
            { id: "C", nama: "Fase C (Kelas 5-6)" }
        ],
        "mapel": {
            "A": ["Pendidikan Agama", "PPKn", "Bahasa Indonesia", "Matematika", "Seni", "PJOK"],
            "B": ["Pendidikan Agama", "PPKn", "Bahasa Indonesia", "Matematika", "Seni", "PJOK", "Bahasa Inggris"],
            "C": ["Pendidikan Agama", "PPKn", "Bahasa Indonesia", "Matematika", "IPAS", "Seni", "PJOK", "Bahasa Inggris"]
        }
    },
    "Paket B": {
        "fase": [
            { id: "D", nama: "Fase D (Kelas 7-9)" }
        ],
        "mapel": {
            "D": [
                "Informatika", "Pendidikan Agama", "PPKn", "Bahasa Indonesia", 
                "Matematika", "IPA", "IPS", "Bahasa Inggris", "Seni", "PJOK"
            ]
        }
    },
    "Paket C": {
        "fase": [
            { id: "E", nama: "Fase E (Kelas 10)" },
            { id: "F", nama: "Fase F (Kelas 11-12)" }
        ],
        "mapel": {
            "E": [
                "Informatika", "Pendidikan Agama", "PPKn", "Bahasa Indonesia", 
                "Matematika", "Fisika", "Kimia", "Biologi", "Sosiologi", "Ekonomi", 
                "Geografi", "Sejarah", "Bahasa Inggris", "Seni", "PJOK"
            ],
            "F": [
                "Informatika", "Pendidikan Agama", "PPKn", "Bahasa Indonesia", 
                "Matematika", "Fisika", "Kimia", "Biologi", "Sosiologi", "Ekonomi", 
                "Geografi", "Sejarah", "Bahasa Inggris", "Seni", "PJOK"
            ]
        }
    }
};

// ==========================================================
// "DATABASE" (GUDANG ATP / SILABUS)
// INILAH "PR" BAPAK: GANTI SEMUA PLACEHOLDER
// ==========================================================
const DATABASE_ATP = {
    
    // ==========================================================
    // INFORMATIKA (GOLD STANDARD - CONTOH JADI)
    // ==========================================================
    "Informatika": {
        "D": { // Paket B
            "atp_list": [
                // KELAS 7
                { id_tp: "D.SK.7.1", kelas: 7, semester: 1, elemen: "SK", tp: "Mengidentifikasi hardware dan software...", materi: "Hardware (Input, Proses, Output), Software (OS, Aplikasi)", jp: 16, ket: "TM" },
                { id_tp: "D.DSI.7.2", kelas: 7, semester: 1, elemen: "DSI/SK", tp: "Menerapkan praktik K3 dan prosedur ON/OFF...", materi: "K3 (Ergonomi), Prosedur Booting/Shutdown", jp: 16, ket: "TM" },
                { id_tp: "D.TIK.7.3", kelas: 7, semester: 2, elemen: "TIK", tp: "Mengelola file dan folder digital (di HP/Komputer)...", materi: "Manajemen File (Create, Rename, Copy, Paste, Delete)", jp: 16, ket: "TM" },
                { id_tp: "D.DSI.7.4", kelas: 7, semester: 2, elemen: "DSI", tp: "Mengidentifikasi risiko dasar internet (Hoax, Phishing)...", materi: "Literasi Digital, Cek Fakta, Phishing", jp: 16, ket: "BM/Tutorial" },
                // (Data Kelas 8 & 9 lengkap...)
                { id_tp: "D.TIK.8.1", kelas: 8, semester: 1, elemen: "TIK", tp: "Membuat dokumen administrasi (CV, Surat Lamaran)...", materi: "Pengolah Kata (Format Teks, Paragraf)", jp: 16, ket: "TM" },
                { id_tp: "D.TIK.8.2", kelas: 8, semester: 1, elemen: "TIK", tp: "Merancang dokumen publikasi sederhana (Brosur, Pamflet)...", materi: "Pengolah Kata (Layout, Sisip Gambar, Tabel)", jp: 16, ket: "BM/Tutorial" },
                { id_tp: "D.TIK.8.3", kelas: 8, semester: 2, elemen: "TIK", tp: "Menggunakan pengolah angka untuk membuat tabel administrasi...", materi: "Pengolah Angka (Sel, Range, Format Tabel)", jp: 16, ket: "TM" },
                { id_tp: "D.TIK.8.4", kelas: 8, semester: 2, elemen: "TIK", tp: "Menggunakan rumus dasar (SUM, AVERAGE) untuk laporan keuangan...", materi: "Pengolah Angka (Rumus SUM, AVERAGE, MAX, MIN)", jp: 16, ket: "TM" },
                { id_tp: "D.TIK.9.1", kelas: 9, semester: 1, elemen: "TIK", tp: "Menerapkan fungsi logika (IF) untuk mengambil keputusan...", materi: "Pengolah Angka (Fungsi IF Tunggal & Bertingkat)", jp: 16, ket: "TM" },
                { id_tp: "D.TIK.9.2", kelas: 9, semester: 1, elemen: "TIK", tp: "Menerapkan fungsi pencarian (VLOOKUP) untuk otomatisasi data...", materi: "Pengolah Angka (VLOOKUP, HLOOKUP)", jp: 16, ket: "BM/Tutorial" },
                { id_tp: "D.AD.9.3", kelas: 9, semester: 2, elemen: "AD/TIK", tp: "Menganalisis data (Sort, Filter) dan membuat Grafik...", materi: "Sort, Filter, Visualisasi Data (Grafik)", jp: 16, ket: "TM" },
                { id_tp: "D.TIK.9.4", kelas: 9, semester: 2, elemen: "TIK", tp: "Mengintegrasikan data (Mail Merge) untuk dokumen massal...", materi: "Integrasi Office (Mail Merge: Word + Excel)", jp: 16, ket: "TM" }
            ]
        },
        "E": { // Paket C - Kelas 10
            "atp_list": [
                { id_tp: "E.JKI.10.1", kelas: 10, semester: 1, elemen: "JKI", tp: "Memahami konsep jaringan, internet, dan search engine...", materi: "Jaringan (LAN, Internet), Search Engine (Boolean)", jp: 16, ket: "TM" },
                { id_tp: "E.JKI.10.2", kelas: 10, semester: 1, elemen: "JKI/TIK", tp: "Menggunakan Email untuk komunikasi digital...", materi: "Komunikasi Asinkron (Email), Etika Netiket", jp: 16, ket: "BM/Tutorial" },
                { id_tp: "E.DSI.10.3", kelas: 10, semester: 2, elemen: "DSI", tp: "Mengidentifikasi risiko privasi & keamanan dasar (Hoax, Phishing)...", materi: "Privasi, Hoax, Phishing, Password Kuat", jp: 16, ket: "TM" },
                { id_tp: "E.TIK.10.4", kelas: 10, semester: 2, elemen: "TIK", tp: "Memahami konsep dan menggunakan Cloud Storage dasar (G-Drive)...", materi: "Cloud Storage, Google Drive, Manajemen File Cloud", jp: 16, ket: "TM" }
            ]
        },
        "F": { // Paket C - Kelas 11 & 12
            "atp_list": [
                // KELAS 11
                { id_tp: "F.TIK.11.1", kelas: 11, semester: 1, elemen: "TIK/DSI", tp: "Menganalisis pemanfaatan E-commerce & keamanan transaksi...", materi: "E-Commerce, Marketplace, Keamanan Transaksi (OTP)", jp: 16, ket: "TM" },
                { id_tp: "F.TIK.11.2", kelas: 11, semester: 1, elemen: "TIK/BK", tp: "Menerapkan kolaborasi cloud secara real-time...", materi: "Kolaborasi (G-Docs/G-Sheets), Hak Akses", jp: 16, ket: "BM/Tutorial" },
                { id_tp: "F.DSI.11.3", kelas: 11, semester: 2, elemen: "DSI", tp: "Menganalisis pemanfaatan Media Sosial dan UU ITE...", materi: "Personal Branding, Pemasaran Digital, UU ITE", jp: 16, ket: "TM" },
                { id_tp: "F.JKI.11.4", kelas: 11, semester: 2, elemen: "JKI/DSI", tp: "Menerapkan Keamanan Siber Lanjut (2FA, VPN)...", materi: "Ancaman Siber (Malware, VPN, 2FA)", jp: 16, ket: "TM" },
                // KELAS 12 (K13/Transisi)
                { id_tp: "F.AI.12.1", kelas: 12, semester: 1, elemen: "AI/DSI", tp: "Menganalisis konsep AI & Dampaknya di dunia kerja...", materi: "Konsep AI, Machine Learning, Dampak Sosial AI", jp: 16, ket: "TM" },
                { id_tp: "F.AI.12.2", kelas: 12, semester: 1, elemen: "AI/BK", tp: "Menggunakan tools AI Generatif (ChatGPT/Gemini) secara etis...", materi: "AI Generatif, Prompt Engineering, Etika AI", jp: 16, ket: "BM/Tutorial" },
                { id_tp: "F.TIK.12.3", kelas: 12, semester: 2, elemen: "TIK", tp: "Review & Latihan Keterampilan TIK K13 (VLOOKUP, Mail Merge)...", materi: "Review Excel Lanjut, Review Mail Merge", jp: 32, ket: "TM (Persiapan Ujian)" }
            ]
        }
    },

    // ==========================================================
    // PLACEHOLDER UNTUK MAPEL LAIN (PAKET B - FASE D)
    // ==========================================================
    "IPS": {
        "D": {
            "atp_list": [
                { id_tp: "D.IPS.7.1", kelas: 7, semester: 1, elemen: "Pemahaman Konsep", tp: "[PLACEHOLDER] TP 1 IPS Kelas 7 Semester 1...", materi: "[Isi Materi IPS K7/S1: Misal, Interaksi Sosial]", jp: 32, ket: "TM" },
                { id_tp: "D.IPS.7.2", kelas: 7, semester: 2, elemen: "Keterampilan Proses", tp: "[PLACEHOLDER] TP 2 IPS Kelas 7 Semester 2...", materi: "[Isi Materi IPS K7/S2: Misal, Lembaga Sosial]", jp: 32, ket: "TM" },
                // (dst... Bapak dan tutor IPS harus mengisi ini)
            ]
        }
    },
    "IPA": {
        "D": {
            "atp_list": [
                { id_tp: "D.IPA.7.1", kelas: 7, semester: 1, elemen: "Pemahaman Sains", tp: "[PLACEHOLDER] TP 1 IPA Kelas 7 Semester 1...", materi: "[Isi Materi IPA K7/S1: Misal, Objek IPA dan Pengamatannya]", jp: 32, ket: "TM" },
                // (dst...)
            ]
        }
    },
    "Matematika": {
        "D": {
            "atp_list": [
                { id_tp: "D.MAT.7.1", kelas: 7, semester: 1, elemen: "Bilangan", tp: "[PLACEHOLDER] TP 1 Matematika Kelas 7 Semester 1...", materi: "[Isi Materi MAT K7/S1: Misal, Bilangan Bulat dan Pecahan]", jp: 32, ket: "TM" },
                // (dst...)
            ]
        }
    },
    // (dst... untuk semua mapel Fase D)

    // ==========================================================
    // PLACEHOLDER UNTUK MAPEL LAIN (PAKET C - FASE E & F)
    // ==========================================================
    "Sosiologi": {
        "E": { "atp_list": [{ id_tp: "E.SOS.10.1", kelas: 10, semester: 1, elemen: "Pemahaman Konsep", tp: "[PLACEHOLDER] TP 1 Sosiologi Kelas 10...", materi: "[Materi Sosiologi K10/S1]", jp: 32, ket: "TM" }] },
        "F": { "atp_list": [{ id_tp: "F.SOS.11.1", kelas: 11, semester: 1, elemen: "Pemahaman Konsep", tp: "[PLACEHOLDER] TP 1 Sosiologi Kelas 11...", materi: "[Materi Sosiologi K11/S1]", jp: 32, ket: "TM" }] }
    },
    "Ekonomi": {
        "E": { "atp_list": [{ id_tp: "E.EKO.10.1", kelas: 10, semester: 1, elemen: "Pemahaman Konsep", tp: "[PLACEHOLDER] TP 1 Ekonomi Kelas 10...", materi: "[Materi Ekonomi K10/S1]", jp: 32, ket: "TM" }] },
        "F": { "atp_list": [{ id_tp: "F.EKO.11.1", kelas: 11, semester: 1, elemen: "Pemahaman Konsep", tp: "[PLACEHOLDER] TP 1 Ekonomi Kelas 11...", materi: "[Materi Ekonomi K11/S1]", jp: 32, ket: "TM" }] }
    }
    // (dst... untuk semua mapel Fase E & F)
};


// ==========================================================
// TAHAP 2: LOGIKA FRONTEND DINAMIS
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    
    const layarIdentitas = document.getElementById('layar-identitas');
    const layarPilihan = document.getElementById('layar-pilihan');
    const btnGenerateMenu = document.getElementById('btn_generate_menu');
    const btnKembali = document.getElementById('btn_kembali');
    const ddJenjang = document.getElementById('jenjang');
    const ddFase = document.getElementById('fase');
    const ddMapel = document.getElementById('mata_pelajaran');
    let dataIdentitas = {};

    function updateDropdowns() {
        const jenjangTerpilih = ddJenjang.value;
        const dataJenjang = PUSTAKA_KURIKULUM[jenjangTerpilih];
        ddFase.innerHTML = "";
        dataJenjang.fase.forEach(fase => {
            const option = document.createElement('option');
            option.value = fase.id;
            option.textContent = fase.nama;
            ddFase.appendChild(option);
        });
        updateMapelDropdown();
    }

    function updateMapelDropdown() {
        const jenjangTerpilih = ddJenjang.value;
        const faseTerpilih = ddFase.value;
        if (!PUSTAKA_KURIKULUM[jenjangTerpilih] || !PUSTAKA_KURIKULUM[jenjangTerpilih].mapel[faseTerpilih]) {
            ddMapel.innerHTML = "<option value=''>--Pilih Fase Dulu--</option>";
            return;
        }
        const daftarMapel = PUSTAKA_KURIKULUM[jenjangTerpilih].mapel[faseTerpilih];
        ddMapel.innerHTML = "";
        daftarMapel.forEach(mapel => {
            const option = document.createElement('option');
            option.value = mapel;
            option.textContent = mapel;
            if (mapel === 'Informatika') option.selected = true;
            ddMapel.appendChild(option);
        });
    }

    updateDropdowns();
    ddJenjang.addEventListener('change', updateDropdowns);
    ddFase.addEventListener('change', updateMapelDropdown);

    btnGenerateMenu.addEventListener('click', () => {
        dataIdentitas = {
            namaTutor: document.getElementById('nama_tutor').value,
            namaLembaga: document.getElementById('nama_lembaga').value,
            alamatLembaga: document.getElementById('alamat_lembaga').value,
            namaKepalaSekolah: document.getElementById('nama_kepala_sekolah').value,
            jenjang: ddJenjang.value,
            fase: ddFase.value,
            tahunAjaran: document.getElementById('tahun_ajaran').value,
            mataPelajaran: ddMapel.value,
            faseNama: ddFase.options[ddFase.selectedIndex].text
        };
        if (!dataIdentitas.mataPelajaran) {
            alert('Mata pelajaran tidak ditemukan untuk fase ini.');
            return;
        }
        layarIdentitas.classList.add('tersembunyi');
        layarPilihan.classList.remove('tersembunyi');
        document.getElementById('judul-pilihan').textContent = `Pilih Dokumen untuk:`;
        document.getElementById('subjudul-pilihan').textContent = `${dataIdentitas.mataPelajaran} - ${dataIdentitas.faseNama}`;
    });

    btnKembali.addEventListener('click', () => {
        layarIdentitas.classList.remove('tersembunyi');
        layarPilihan.classList.add('tersembunyi');
    });

    // ==========================================================
    // TAHAP 3: "KOKI" (LOGIKA GENERATOR CERDAS)
    // ==========================================================

    document.getElementById('btn_prota').addEventListener('click', () => {
        generateProta(dataIdentitas);
    });

    document.getElementById('btn_prosem').addEventListener('click', () => {
        const semester = prompt("Buat PROSEM untuk Semester berapa? (Ketik 1 untuk Ganjil, 2 untuk Genap)", "1");
        if (semester === "1" || semester === "2") {
            generateProsem(dataIdentitas, parseInt(semester));
        }
    });

    document.getElementById('btn_silabus').addEventListener('click', () => {
        generateSilabus(dataIdentitas);
    });

    document.getElementById('btn_modul_ajar').addEventListener('click', () => {
        generateModulAjar(dataIdentitas);
    });
});


// ==========================================================
// FUNGSI GENERATOR
// ==========================================================

// Fungsi Helper untuk mengecek data
function getAptList(data) {
    const dataMapel = DATABASE_ATP[data.mataPelajaran];
    if (!dataMapel || !dataMapel[data.fase] || !dataMapel[data.fase].atp_list) {
        alert(`Maaf, data kurikulum (ATP/Silabus) untuk ${data.mataPelajaran} Fase ${data.fase} BELUM DIISI di DATABASE_ATP.`);
        return null;
    }
    return dataMapel[data.fase].atp_list;
}

// Fungsi Helper untuk TTD
function getTTD(data) {
    return `
        <div style="width: 30%; float: right; margin-top: 50px; text-align: center; font-family: 'Poppins', sans-serif; font-size: 11pt;">
            <p>Paculgowang, Juli ${data.tahunAjaran.split('/')[0]}</p>
            <p>Mengetahui,<br>Kepala PKBM Tarbiyatunnasyiin</p>
            <br><br><br>
            <p><b>(${data.namaKepalaSekolah})</b></p>
        </div>
        <div style="width: 30%; float: left; margin-top: 50px; text-align: center; font-family: 'Poppins', sans-serif; font-size: 11pt;">
            <br>
            <p>Tutor Mata Pelajaran,</p>
            <br><br><br>
            <p><b>(${data.namaTutor})</b></p>
        </div>
    `;
}

// Fungsi Helper untuk KOP
function getKop(judul, data) {
    return `
        <div style="text-align: center; margin-bottom: 30px; font-family: 'Poppins', sans-serif;">
            <h1 style="font-size: 16pt; margin: 0;">${judul.toUpperCase()}</h1>
            <h2 style="font-size: 14pt; margin: 0; margin-top: 5px;">TAHUN AJARAN ${data.tahunAjaran}</h2>
            <div style="font-size: 11pt; margin-top: 15px;">
                <p style="margin: 2px;"><b>Institusi:</b> ${data.namaLembaga}</p>
                <p style="margin: 2px;"><b>Mata Pelajaran:</b> ${data.mataPelajaran}</p>
                <p style="margin: 2px;"><b>Program / Fase:</b> ${data.jenjang} / ${data.fase} (${data.faseNama})</p>
                <p style="margin: 2px;"><b>Tutor Penyusun:</b> ${data.namaTutor}</p>
            </div>
        </div>
    `;
}

// Fungsi Helper untuk Stylesheet
function getStyles() {
    return `
        <style>
            body { font-family: 'Poppins', 'Verdana', sans-serif; padding: 20px; font-size: 11pt; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; vertical-align: top; }
            th { background-color: #f2f2f2; text-align: center; }
        </style>
    `;
}

// === FUNGSI BARU: DOWNLOAD AS DOC ===
function downloadAsDoc(htmlContent, filename) {
    // Ini adalah header yang memberitahu MS Word bahwa ini adalah file HTML
    const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Generator</title></head><body>";
    
    const footer = "</body></html>";
    
    // Gabungkan header, konten, dan footer
    const sourceHTML = header + htmlContent + footer;

    // Buat Blob (file) di memori
    const blob = new Blob([sourceHTML], { type: 'application/msword' });

    // Buat link download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    
    // Klik link secara otomatis
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// --- GENERATOR PROTA (SUDAH di-upgrade) ---
function generateProta(data) {
    const atpList = getAptList(data);
    if (!atpList) return;

    let outputHTML = getKop(`PROGRAM TAHUNAN (PROTA)`, data);
    
    outputHTML += `
        <table><thead><tr>
            <th>Semester</th>
            <th>Kelas</th>
            <th>Materi Pokok / Lingkup Materi</th>
            <th>Alokasi Waktu (JP)</th>
            <th>Keterangan</th>
        </tr></thead><tbody>
    `;

    let totalJP = 0;
    const sem1 = atpList.filter(tp => tp.semester === 1);
    const sem2 = atpList.filter(tp => tp.semester === 2);

    sem1.forEach((item, index) => {
        outputHTML += `
            <tr>
                ${index === 0 ? `<td rowspan="${sem1.length}" style="text-align: center;"><b>1 (Ganjil)</b></td>` : ''}
                <td style="text-align: center;">${item.kelas}</td>
                <td><b>${item.elemen}:</b> ${item.tp} <br><i>(Konten: ${item.materi})</i></td>
                <td style="text-align: center;">${item.jp} JP</td>
                <td style="text-align: center;">${item.ket}</td>
            </tr>
        `;
        totalJP += item.jp;
    });
    
    sem2.forEach((item, index) => {
        outputHTML += `
            <tr>
                ${index === 0 ? `<td rowspan="${sem2.length}" style="text-align: center;"><b>2 (Genap)</b></td>` : ''}
                <td style="text-align: center;">${item.kelas}</td>
                <td><b>${item.elemen}:</b> ${item.tp} <br><i>(Konten: ${item.materi})</i></td>
                <td style="text-align: center;">${item.jp} JP</td>
                <td style="text-align: center;">${item.ket}</td>
            </tr>
        `;
        totalJP += item.jp;
    });

    outputHTML += `
            </tbody><tfoot>
                <tr><th colspan="3">Jumlah Total</th><th colspan="2">${totalJP} JP</th></tr>
            </tfoot></table>
    `;
    outputHTML += getTTD(data);

    // Panggil fungsi download
    const filename = `PROTA_${data.mataPelajaran}_${data.fase}.doc`;
    downloadAsDoc(`<html><head>${getStyles()}</head><body>${outputHTML}</body></html>`, filename);
}

// --- GENERATOR PROSEM (SUDAH di-upgrade) ---
function generateProsem(data, semester) {
    const atpList = getAptList(data);
    if (!atpList) return;

    const dataProsem = atpList.filter(tp => tp.semester === semester);
    if (dataProsem.length === 0) {
        alert(`Tidak ada data ATP yang dialokasikan untuk Semester ${semester} pada mapel ini.`);
        return;
    }
    
    const namaSemester = (semester === 1) ? "GANJIL" : "GENAP";
    let outputHTML = getKop(`PROGRAM SEMESTER (PROSEM) - SEMESTER ${namaSemester}`, data);

    outputHTML += `
        <table><thead><tr>
            <th>Kelas</th>
            <th>Elemen</th>
            <th>Tujuan Pembelajaran (TP) / Materi</th>
            <th>Alokasi</th>
            <th>Keterangan</th>
        </tr></thead><tbody>
    `;

    dataProsem.forEach(item => {
        outputHTML += `
            <tr>
                <td style="text-align: center;">${item.kelas}</td>
                <td>${item.elemen}</td>
                <td><b>TP:</b> ${item.tp} <br><b>Materi:</b> ${item.materi}</td>
                <td style="text-align: center;">${item.jp} JP</td>
                <td style="text-align: center;">${item.ket} (TM/BM)</td>
            </tr>
        `;
    });

    outputHTML += `</tbody></table>`;
    outputHTML += getTTD(data);
    
    // Panggil fungsi download
    const filename = `PROSEM_S${semester}_${data.mataPelajaran}_${data.fase}.doc`;
    downloadAsDoc(`<html><head>${getStyles()}</head><body>${outputHTML}</body></html>`, filename);
}

// --- GENERATOR SILABUS / ATP (SUDAH di-upgrade) ---
function generateSilabus(data) {
    const atpList = getAptList(data);
    if (!atpList) return;

    let outputHTML = getKop(`ALUR TUJUAN PEMBELAJARAN (ATP) / SILABUS`, data);
    
    outputHTML += `
        <table><thead><tr>
            <th>ID TP</th>
            <th>Kelas/Sem</th>
            <th>Elemen</th>
            <th>Tujuan Pembelajaran (TP)</th>
            <th>Materi Pokok (Konten)</th>
            <th>Alokasi JP</th>
        </tr></thead><tbody>
    `;

    atpList.forEach(item => {
        outputHTML += `
            <tr>
                <td>${item.id_tp}</td>
                <td style="text-align: center;">${item.kelas} / ${item.semester}</td>
                <td>${item.elemen}</td>
                <td>${item.tp}</td>
                <td>${item.materi}</td>
                <td style="text-align: center;">${item.jp} JP</td>
            </tr>
        `;
    });

    outputHTML += `</tbody></table>`;
    outputHTML += getTTD(data);
    
    // Panggil fungsi download
    const filename = `ATP_SILABUS_${data.mataPelajaran}_${data.fase}.doc`;
    downloadAsDoc(`<html><head>${getStyles()}</head><body>${outputHTML}</body></html>`, filename);
}

// --- GENERATOR MODUL AJAR (SUDAH di-upgrade) ---
function generateModulAjar(data) {
    const atpList = getAptList(data);
    if (!atpList) return;

    let promptText = "TP mana yang ingin Anda buatkan Modul Ajar?\n(Ketik nomor urutnya):\n\n";
    atpList.forEach((item, index) => {
        promptText += `${index + 1}. (Kls ${item.kelas}/S${item.semester}) ${item.tp}\n`;
    });

    const pilihan = prompt(promptText, "1");
    if (pilihan === null || isNaN(pilihan) || pilihan < 1 || pilihan > atpList.length) {
        return; // Batal
    }

    const tpTerpilih = atpList[parseInt(pilihan) - 1];

    let outputHTML = getKop(`MODUL AJAR (MA) / RPP`, data);

    outputHTML += `
        <h3>A. INFORMASI UMUM</h3>
        <table style="width: 100%;">
            <tr><td style="width: 30%;"><b>Tutor Penyusun</b></td><td>${data.namaTutor}</td></tr>
            <tr><td><b>Institusi</b></td><td>${data.namaLembaga}</td></tr>
            <tr><td><b>Tahun / Semester</b></td><td>${data.tahunAjaran} / ${tpTerpilih.semester}</td></tr>
            <tr><td><b>Program / Fase</b></td><td>${data.jenjang} / ${data.fase} (Kelas ${tpTerpilih.kelas})</td></tr>
            <tr><td><b>Mata Pelajaran</b></td><td>${data.mataPelajaran}</td></tr>
            <tr><td><b>Alokasi Waktu</b></td><td>${tpTerpilih.jp} JP (Model: ${tpTerpilih.ket})</td></tr>
            <tr><td><b>Elemen CP</b></td><td>${tpTerpilih.elemen}</td></tr>
            <tr><td><b>Kompetensi Awal</b></td><td>[Isi kompetensi awal yang diasumsikan dimiliki WB]</td></tr>
            <tr><td><b>Profil Pelajar Pancila</b></td><td>[Pilih profil yang relevan, misal: Mandiri, Bernalar Kritis]</td></tr>
        </table>

        <h3>B. KOMPONEN INTI</h3>
        <table style="width: 100%;">
            <tr><td style="width: 30%;"><b>Tujuan Pembelajaran (TP)</b></td>
                <td><b>${tpTerpilih.id_tp}:</b> ${tpTerpilih.tp}</td>
            </tr>
            <tr><td><b>Materi Pokok</b></td>
                <td>${tpTerpilih.materi}</td>
            </tr>
            <tr><td><b>Pemahaman Bermakna</b></td>
                <td>[Isi pemahaman bermakna: "Mengapa materi ini penting bagi WB?"]</td>
            </tr>
            <tr><td><b>Pertanyaan Pemantik</b></td>
                <td>[Isi pertanyaan pemantik untuk memancing diskusi]</td>
            </tr>
            <tr><td><b>Kegiatan Pembelajaran</b></td>
                <td>
                    <b>Pendahuluan (Contoh 20 Menit):</b>
                    <ol>
                        <li>Salam, Doa, Presensi.</li>
                        <li>Apersepsi & Pertanyaan Pemantik.</li>
                        <li>Menyampaikan Tujuan Pembelajaran.</li>
                    </ol>
                    <b>Kegiatan Inti (Contoh 140 Menit):</b>
                    <ol>
                        <li>[Isi Langkah 1: Eksplorasi Konsep...]</li>
                        <li>[Isi Langkah 2: Demonstrasi Tutor...]</li>
                        <li>[Isi Langkah 3: Praktik Terbimbing WB...]</li>
                        <li>[Isi Langkah 4: Asesmen Formatif (LKPD)...]</li>
                    </ol>
                    <b>Penutup (Contoh 20 Menit):</b>
                    <ol>
                        <li>Kesimpulan & Refleksi.</li>
                        <li>Info materi selanjutnya (untuk Belajar Mandiri/Tutorial).</li>
                        <li>Doa & Salam.</li>
                    </ol>
                </td>
            </tr>
            <tr><td><b>Asesmen</b></td>
                <td>
                    <b>Diagnostik:</b> [Misal: Lisan (saat Pertanyaan Pemantik)]<br>
                    <b>Formatif:</b> [Misal: Observasi (saat praktik), Hasil LKPD]<br>
                    <b>Sumatif:</b> [Misal: Proyek di akhir Bab/Modul]
                </td>
            </tr>
        </table>
        
        <h3>C. LAMPIRAN</h3>
        <p>1. Lembar Kerja Peserta Didik (LKPD)</p>
        <p>2. Bahan Bacaan (Ringkasan Materi)</p>
        <p>3. Glosarium</p>
    `;

    outputHTML += getTTD(data);

    // Panggil fungsi download
    const filename = `MODUL_AJAR_${data.mataPelajaran}_${tpTerpilih.id_tp}.doc`;
    downloadAsDoc(`<html><head>${getStyles()}</head><body>${outputHTML}</body></html>`, filename);
}