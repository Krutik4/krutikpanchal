/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// Custom scripts
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const alertBox = document.getElementById('successAlert');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(() => {
                if (alertBox) {
                    alertBox.style.display = 'block';
                    alertBox.classList.add('show');
                    setTimeout(() => {
                        alertBox.classList.remove('show');
                        alertBox.style.display = 'none';
                    }, 3000);
                }
                form.reset();
            }).catch((err) => {
                console.error('Form submission failed:', err);
                form.reset();
            });
        });
    }
});
