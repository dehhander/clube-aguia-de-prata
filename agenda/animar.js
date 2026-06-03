document.addEventListener('DOMContentLoaded', () => {
  const agendaDiv = document.querySelector('.agenda');
  const hoje = new Date();

  // 🔧 Aqui você edita os eventos: data: [ {titulo, local, horario}, ... ]
  const eventosEspecificos = {
  "2026-06-01": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-07": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-08": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-14": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2025-06-15": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-21": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-22": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-28": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-06-29": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-05": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-06": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-12": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-13": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-19": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-20": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-26": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-07-27": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-02": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-03": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-09": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-10": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-16": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-17": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-23": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-24": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-30": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-08-31": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-06": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-07": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-13": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-14": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-20": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-21": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-27": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-09-28": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-04": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-05": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-11": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-12": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-18": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-19": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-25": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-10-26": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-01": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-02": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-08": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-09": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-15": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-16": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-22": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-23": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-29": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-11-30": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-06": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-07": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-13": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-14": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-20": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-21": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-27": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ],
  "2026-12-28": [
    { titulo: "Título do Evento", local: "Local", horario: "Horário" }
  ]
};

  // Obter e ordenar as datas futuras (criando como LOCAL, não UTC)
  const datasEventos = Object.keys(eventosEspecificos)
    .map(dataStr => {
      const [ano, mes, dia] = dataStr.split('-').map(Number);
      return new Date(ano, mes - 1, dia); // ← local
    })
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
      // Construir a chave manualmente para não ter problema de fuso
      const dataISO = `${dataEvento.getFullYear()}-${String(dataEvento.getMonth() + 1).padStart(2, '0')}-${String(dataEvento.getDate()).padStart(2, '0')}`;
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

// Menu mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


