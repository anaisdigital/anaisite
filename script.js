function atualizarTudo() {
    const agora = new Date();
    const relogioEl = document.getElementById('relogio');
    if(relogioEl) relogioEl.textContent = agora.toLocaleTimeString('pt-br');

    const dataEl = document.getElementById('data');
    if(dataEl) {
        const isoData = agora.toISOString().split('T')[0];
        dataEl.textContent = isoData;
    }
}
setInterval(atualizarTudo, 1000);
atualizarTudo();