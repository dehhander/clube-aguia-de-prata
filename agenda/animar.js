document.addEventListener('DOMContentLoaded', () => {
  const agendaDiv = document.querySelector('.agenda');
  const hoje = new Date();
  const inicio = new Date(2025, 5, 1); // 1 Junho 2025
  const fim = new Date(2025, 11, 31); // 31 Dezembro 2025

  // Função para gerar sábados e domingos por mês
  function gerarFinaisSemanaPorMes(inicio, fim) {
    const datasPorMes = {};
    let data = new Date(inicio);
    while (data <= fim) {
      if (data.getDay() === 6 || data.getDay() === 0) {
        const anoMes = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
        if (!datasPorMes[anoMes]) {
          datasPorMes[anoMes] = [];
        }
        datasPorMes[anoMes].push(new Date(data));
      }
      data.setDate(data.getDate() + 1);
    }
    return datasPorMes;
  }

  // Tipos de eventos de exemplo, pode alterar depois
  const tiposEventos = [
    { titulo: "Evento de Sábado", local: "Local A", horario: "10:00 - 12:00" },
    { titulo: "Evento de Domingo", local: "Local B", horario: "14:00 - 16:00" }
  ];

  const datasPorMes = gerarFinaisSemanaPorMes(inicio, fim);

  agendaDiv.innerHTML = '';

  // Construindo agenda por mês
  Object.keys(datasPorMes).sort().forEach((anoMes) => {
    const [ano, mes] = anoMes.split('-');
    const nomeMes = new Date(ano, Number(mes) - 1).toLocaleString('pt-BR', { month: 'long' });

    const section = document.createElement('section');
    section.classList.add('agenda-mes');

    const tituloMes = document.createElement('h2');
    tituloMes.textContent = `${nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)} ${ano}`;
    section.appendChild(tituloMes);

    datasPorMes[anoMes].forEach((dataEvento, idx) => {
      if (dataEvento >= hoje) {
        const ev = tiposEventos[idx % tiposEventos.length];

        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('evento');
        eventoDiv.setAttribute('data-date', dataEvento.toISOString().slice(0, 10));
        eventoDiv.innerHTML = `
          <div class="data">
            <span class="dia">${String(dataEvento.getDate()).padStart(2, '0')}</span>
            <span class="mes">${dataEvento.toLocaleString('pt-BR', { month: 'short' }).toUpperCase()}</span>
          </div>
          <div class="detalhes">
            <h3>${ev.titulo}</h3>
            <p>Local: ${ev.local}</p>
            <p>Horário: ${ev.horario}</p>
          </div>
        `;
        section.appendChild(eventoDiv);
      }
    });

    agendaDiv.appendChild(section);
  });

  // Hover efeitos
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
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
