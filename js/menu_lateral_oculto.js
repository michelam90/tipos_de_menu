function abrirNav() {
    /* Expandindo largura do menu em 250px para direita */
    document.getElementById("menuOculto").style.width = "250px";
    /* Distanciar conteúdo do sita 250px da margem esquerda para o menu não ficar por cima*/
    document.getElementById("principal").style.marginLeft = "250px"; 
    /* Ocultando botão de barrinhas de expandir */
    document.getElementById("btnExpandir").style.display = "none";
}

function fecharNav() {
    /* Recolher menu definindo largura como 0px */
    document.getElementById("menuOculto").style.width = "0";
    /* Voltar conteúdo para próximo a margem esquerda*/
    document.getElementById("principal").style.marginLeft = "0";
    /* Mostra botão de barrinhas de expandir */
    document.getElementById("btnExpandir").style.display = ""; 
}