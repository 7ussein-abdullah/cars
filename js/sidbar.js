let btns = document.querySelectorAll('[data-btn]');
btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        let id = document.querySelector(btn.getAttribute('data-target'))
        id.classList.toggle('active')
    })
});