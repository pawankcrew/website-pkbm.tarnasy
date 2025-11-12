// element_sdk.js
// Ini adalah SDK kecil untuk mengatur konfigurasi tampilan

let config = {};
let onConfigChangeCallback = null;

function init(options) {
  config = { ...options.defaultConfig };
  onConfigChangeCallback = options.onConfigChange;
  // Di sini bisa ditambahkan logika lain jika perlu
}

function setConfig(newConfig) {
  config = { ...config, ...newConfig };
  if (onConfigChangeCallback) {
    onConfigChangeCallback(config);
  }
}

function getCapabilities() {
  // Logika untuk mendapatkan kapabilitas editing bisa ditambahkan di sini
  return {};
}

// Export fungsi agar bisa dipanggil dari file utama
window.elementSdk = {
  init,
  setConfig,
  config: () => config
};