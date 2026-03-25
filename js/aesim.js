
// Multi-page navigation: only handle mobile nav toggle and contact form validation
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.menu');
    const nav = document.querySelector('.nav');

    // Toggle navigation for mobile (if menu button exists)
    if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
            nav.classList.toggle('on');
            navToggle.classList.toggle('on');
        });
    }

    // Contact form validation (remains for contact page)
    const contactForm = document.querySelector('form#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = contactForm.querySelector('input[name="name"]');
            const phone = contactForm.querySelector('input[name="phone"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            let valid = true;
            [name, phone, message].forEach(field => {
                if (field && !field.value.trim()) {
                    field.classList.add('input-error');
                    valid = false;
                } else if (field) {
                    field.classList.remove('input-error');
                }
            });
            if (!valid) {
                e.preventDefault();
                alert('모든 필수 정보를 입력해 주세요.');
            }
        });
    }
});