const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Membuat jendela browser.
  const win = new BrowserWindow({
    width: 1024, // Lebar jendela, silakan ubah
    height: 768, // Tinggi jendela, silakan ubah
    icon: path.join(__dirname, 'favicon.ico'), // <-- TAMBAHKAN BARIS INI
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // dan memuat file eRaporKu.html Anda.
  win.loadFile('eRaporKu.html');
}

// Metode ini akan dipanggil ketika Electron akan selesai
// inisialisasi dan siap untuk membuat jendela browser.
app.whenReady().then(createWindow);