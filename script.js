

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