document.querySelectorAll('.evento').forEach(evento => {
    evento.addEventListener('mouseenter', () => {
        evento.style.transform = 'scale(1.02)';
        evento.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    evento.addEventListener('mouseleave', () => {
        evento.style.transform = 'scale(1)';
        evento.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    });
});
