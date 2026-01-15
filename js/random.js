function toggleNav() {
    const navbar = document.getElementById('navbar');
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth > 768) {
        navbar.style.display = 'none';
        sidebar.style.display = 'block';
    } else {
        navbar.style.display = 'block';
        sidebar.style.display = 'none';
    }
}

window.addEventListener('load', toggleNav);
window.addEventListener('resize', toggleNav);