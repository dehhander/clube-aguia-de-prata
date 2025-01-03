function showHistory(unit) {
    const title = document.getElementById('unit-title');
    const contentContainer = document.getElementById('unit-content');
    
    // Resetando o conteúdo
    contentContainer.innerHTML = '';
    
    if (unit === 'visao-de-aguia') {
        title.textContent = 'Visão de Águia';
        
        contentContainer.innerHTML = `
            <div>
                <h3>Sobre a Unidade</h3>
                <p>A Visão de Águia é composta por 8 desbravadores de 10 a 12 anos. Esta unidade é dedicada a desenvolver o foco e a determinação entre os jovens, guiando-os a alcançar grandes objetivos.</p>
            </div>
            <div>
                <h3>Visão da Águia</h3>
                <p>A águia, conhecida por sua visão aguçada, simboliza o foco e a clareza que os desbravadores da Visão de Águia devem ter para conquistar suas metas.</p>
            </div>
            <div>
                <h3>História do Logo</h3>
                <p>O logo da Visão de Águia foi inspirado no voo majestoso da águia, que transmite a ideia de superar obstáculos e olhar o mundo de uma perspectiva elevada.</p>
            </div>
            <div>
                <h3>Grito de Guerra</h3>
                <p>“Com a visão da águia, conquistaremos o mundo!”</p>
            </div>
        `;
    } else if (unit === 'aquila') {
        title.textContent = 'Áquila';
        
        contentContainer.innerHTML = `
            <div>
                <h3>Sobre a Unidade</h3>
                <p>A Áquila é composta por 8 desbravadores de 13 a 15 anos. Eles são jovens que já possuem mais experiência e coragem, prontos para encarar grandes desafios e se destacarem em suas jornadas.</p>
            </div>
            <div>
                <h3>Visão da Águia</h3>
                <p>O simbolismo da águia, representando o poder e a liberdade, é uma forte característica da unidade Áquila. O desbravador da Áquila é alguém que busca sua independência, sempre se esforçando para alcançar suas metas.</p>
            </div>
            <div>
                <h3>História do Logo</h3>
                <p>O logo da Áquila foi criado para refletir a força e a liberdade da águia, com asas abertas e prontas para voar em direção a grandes feitos.</p>
            </div>
            <div>
                <h3>Grito de Guerra</h3>
                <p>“Com força e coragem, voamos como águias!”</p>
            </div>
        `;
    } else if (unit === 'aguias-mensageiras') {
        title.textContent = 'Águias Mensageiras';
        
        contentContainer.innerHTML = `
            <div>
                <h3>Sobre a Unidade</h3>
                <p>As Águias Mensageiras são compostas por 10 desbravadoras de 10 a 15 anos. Elas têm a missão de espalhar mensagens de esperança e transformação, com um olhar atento ao mundo ao seu redor.</p>
            </div>
            <div>
                <h3>Visão da Águia</h3>
                <p>A águia, símbolo de sabedoria e percepção, reflete a missão das Águias Mensageiras de transmitir mensagens importantes com clareza e determinação.</p>
            </div>
            <div>
                <h3>História do Logo</h3>
                <p>O logo das Águias Mensageiras foi inspirado pela águia mensageira que leva palavras de sabedoria, representando o papel da unidade na comunicação e na transmissão de valores.</p>
            </div>
            <div>
                <h3>Grito de Guerra</h3>
                <p>“Levantamos nossas asas e levamos a mensagem ao mundo!”</p>
            </div>
        `;
    }
}
