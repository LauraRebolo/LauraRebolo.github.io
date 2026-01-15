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


//formulario de contacto
const form = document.getElementById('contactForm');
const subjectInput = document.getElementById('subject');
const bodyInput = document.getElementById('mensaje');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const subject = encodeURIComponent(subjectInput.value);
    const body = encodeURIComponent(bodyInput.value);

    const mailtoLink = `mailto:bylrdesigner@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
});