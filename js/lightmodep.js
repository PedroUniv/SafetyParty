function lightmodep() {

    const elemento =
        document.getElementById('particles-js') ||
        document.getElementById('light-mode-particles');

    // Alterna entre os IDs
    if (elemento.id === 'particles-js') {

        // ATIVA modo claro
        elemento.id = 'light-mode-particles';

        // Texto preto
        document.body.style.color = 'black';

        // Fundo claro
        document.body.style.backgroundColor = 'white';
        document.getElementsByClassName("menulogin")[0].style.borderColor = "black";
        
 

        localStorage.setItem('tema', 'light');

    } else {

        // VOLTA modo escuro
        elemento.id = 'particles-js';

        // Texto branco
        document.body.style.color = 'white';

        // Fundo escuro
        document.body.style.backgroundColor = '#111';
        document.getElementsByClassName("menulogin")[0].style.borderColor = "rgba(255, 255, 255, 0.2)";


        localStorage.setItem('tema', 'dark');
    }

    console.log('ID atual do elemento:', elemento.id);
    
}
