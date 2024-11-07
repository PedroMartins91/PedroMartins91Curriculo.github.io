function atualizarDataHora() {
    const data = new Date();
    
    
    const dataFormatada = data.toLocaleString('pt-pt', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false 
    });

    
    document.getElementById("data-hora").textContent = dataFormatada;
}


atualizarDataHora();

setInterval(atualizarDataHora, 1000);