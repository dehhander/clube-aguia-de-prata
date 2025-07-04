document.addEventListener('DOMContentLoaded', () => {
  const agendaDiv = document.querySelector('.agenda');
  const hoje = new Date();

  // 🔧 Aqui você edita os eventos: data: [ {titulo, local, horario}, ... ]
  const eventosEspecificos = {
  "2025-06-01": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-07": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-08": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-14": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-15": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-21": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-22": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-28": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-29": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-05": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-06": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-12": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-13": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-19": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-20": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-26": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-07-27": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-02": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-03": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-09": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-10": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-16": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-17": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-23": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-24": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-30": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-08-31": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-06": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-07": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-13": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-14": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-20": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-21": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-27": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-09-28": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-04": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-05": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-11": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-12": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-18": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-19": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-25": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-10-26": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-01": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-02": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-08": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-09": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-15": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-16": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-22": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-23": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-29": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-11-30": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-06": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-07": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-13": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-14": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-20": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-21": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-27": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-12-28": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ]
};

  // Obter e ordenar as datas futuras
  const datasEventos = Object.keys(eventosEspecificos)
    .map(dataStr => new Date(dataStr))
    .filter(data => data >= hoje)
    .sort((a, b) => a - b);

  agendaDiv.innerHTML = '';

  // Agrupar eventos por mês
  const eventosPorMes = {};
  datasEventos.forEach(data => {
    const anoMes = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
    if (!eventosPorMes[anoMes]) eventosPorMes[anoMes] = [];
    eventosPorMes[anoMes].push(data);
  });

  Object.keys(eventosPorMes).sort().forEach((anoMes) => {
    const [ano, mes] = anoMes.split('-');
    const nomeMes = new Date(ano, Number(mes) - 1).toLocaleString('pt-BR', { month: 'long' });

    const section = document.createElement('section');
    section.classList.add('agenda-mes');

    const tituloMes = document.createElement('h2');
    tituloMes.textContent = `${nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)} ${ano}`;
    section.appendChild(tituloMes);

    eventosPorMes[anoMes].forEach((dataEvento) => {
      const dataISO = dataEvento.toISOString().slice(0, 10);
      const eventosDoDia = eventosEspecificos[dataISO];

      eventosDoDia.forEach(ev => {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('evento');
        eventoDiv.setAttribute('data-date', dataISO);
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
      });
    });

    agendaDiv.appendChild(section);
  });

  // Hover efeito
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

// Menu mobile (mantido como estava)
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
