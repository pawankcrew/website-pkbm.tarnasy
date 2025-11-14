// Kode untuk Smooth Scrolling (sudah ada)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- KODE MENU HAMBURGER DAN AUTO-HIDE ---
document.addEventListener('DOMContentLoaded', function() {
    // Memilih tombol toggle dan menu berdasarkan ID dan Class
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu'); 
    
    // Pastikan kedua elemen ditemukan di HTML
    if (menuToggle && navMenu) {
        // Logika saat tombol hamburger diklik
        menuToggle.addEventListener('click', function() {
            // 1. Toggle kelas 'active' pada menu
            navMenu.classList.toggle('active');
            
            // 2. Mengubah ikon dari hamburger (fa-bars) menjadi close (fa-times)
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // >> LOGIKA AUTO-HIDE: Tutup menu saat link diklik (SOLUSI MASALAH ANDA) <<
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Hanya tutup jika berada di tampilan mobile (<= 992px)
                if (window.innerWidth <= 992) { 
                    navMenu.classList.remove('active');
                    // Reset ikon ke hamburger
                    menuToggle.querySelector('i').classList.remove('fa-times');
                    menuToggle.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }
});