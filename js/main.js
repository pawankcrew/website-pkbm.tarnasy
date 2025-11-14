// Kode untuk Smooth Scrolling (sudah ada)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Kode Tambahan untuk Fungsionalitas Menu Hamburger ---
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Toggle kelas 'active' pada menu
            navMenu.classList.toggle('active');
            
            // Mengubah ikon dari hamburger (fa-bars) menjadi close (fa-times)
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Tutup menu saat link diklik (agar pengalaman mobile lebih baik)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Hanya tutup jika berada di tampilan mobile
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