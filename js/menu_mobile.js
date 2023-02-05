function controleMenu() {
    const menu = document.getElementById("menus"); /* Pegando todos os elentos dentro da ID menu */
    /* Verificando qual display está ativo e trocando ao clicar no botão de menu */
    if(menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}