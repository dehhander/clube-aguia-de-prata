document.addEventListener("DOMContentLoaded", function () {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Remove horas para comparar apenas a data

    document.querySelectorAll('.evento').forEach(evento => {
        const dataEvento = new Date(evento.getAttribute("data-date"));

        if (!isNaN(dataEvento) && dataEvento < hoje) {
            evento.remove(); // Remove eventos passados
        } else {
            // Aplica efeito de hover apenas nos eventos que ainda estão na página
            evento.addEventListener('mouseenter', () => {
                evento.style.transform = 'scale(1.02)';
                evento.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            });

            evento.addEventListener('mouseleave', () => {
                evento.style.transform = 'scale(1)';
                evento.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            });
        }
    });
});
