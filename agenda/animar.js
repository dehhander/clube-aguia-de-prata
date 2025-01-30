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

document.addEventListener("DOMContentLoaded", function () {
    const eventos = document.querySelectorAll(".evento"); // Seleciona todos os eventos
    const hoje = new Date(); // Obtém a data atual

    eventos.forEach(evento => {
        const dataEvento = new Date(evento.getAttribute("data-date")); // Obtém a data do evento

        if (dataEvento < hoje) {
            evento.remove(); // Remove o evento se já tiver passado
        }
    });
});
