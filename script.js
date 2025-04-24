document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    const container = input.parentElement;
    const toggle = () => container.classList.toggle('filled', input.value.trim() !== '');
    input.addEventListener('input', toggle);
    input.addEventListener('blur', toggle);
});
