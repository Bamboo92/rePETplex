document.addEventListener("DOMContentLoaded", function () {
    const langLinks = document.querySelectorAll(".lang-dropdown a");

    langLinks.forEach(link => {
        link.addEventListener("click", function () {
            const href = this.getAttribute("href");
            const lang = href.replace(/\//g, ''); // z. B. "/de/" → "de"
            localStorage.setItem("preferredLanguage", lang);
        });
    });

    (function() {
        const supportedLanguages = ['en', 'de', 'fr', 'ar'];
        const baseUrl = window.location.origin;

        // Wenn Sprache schon gewählt wurde → nicht weiterleiten
        if (localStorage.getItem('preferredLanguage')) return;

        const browserLang = navigator.language.slice(0, 2).toLowerCase();

        if (supportedLanguages.includes(browserLang)) {
            const targetUrl = browserLang === 'en'
                ? `${baseUrl}/`
                : `${baseUrl}/${browserLang}/`;

            // Sprache speichern und weiterleiten
            localStorage.setItem('preferredLanguage', browserLang);
            if (window.location.href !== targetUrl) {
                window.location.replace(targetUrl);
            }
        } else {
            // Unbekannte Sprache: bleibe auf default (en)
            localStorage.setItem('preferredLanguage', 'en');
        }
    })();
});

document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    const container = input.parentElement;
    const toggle = () => container.classList.toggle('filled', input.value.trim() !== '');
    input.addEventListener('input', toggle);
    input.addEventListener('blur', toggle);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const wrapper = entry.target.parentElement;
            // füge “in-view” sowohl auf h2 als auch auf Wrapper an/ab
            entry.target.classList.toggle('in-view', entry.isIntersecting);
            wrapper.classList.toggle('in-view', entry.isIntersecting);
        });
    }, {
        rootMargin: '-50px 0px -50px 0px',
        threshold: 0
    });

    document.querySelectorAll('.animated-title').forEach(el => {
        observer.observe(el);
    });
});