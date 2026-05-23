function lightmodep() {
    const elemento =
        document.getElementById('particles-js') ||
        document.getElementById('light-mode-particles');

    
    const checkbox = document.getElementById('mudartema');

    // Alterna entre os IDs
    if (elemento.id === 'particles-js') {

        // ATIVA modo claro
        elemento.id = 'light-mode-particles';

        // Texto preto
        document.body.style.color = 'black';

        // Fundo claro
        document.body.style.backgroundColor = 'white';
        if (document.getElementsByClassName("menulogin")[0]) {
            document.getElementsByClassName("menulogin")[0].style.borderColor = "black";
        }


        localStorage.setItem('tema', 'light');

        
        if (checkbox) checkbox.checked = true;

    } else {

        // VOLTA modo escuro
        elemento.id = 'particles-js';

        // Texto branco
        document.body.style.color = 'white';

        // Fundo escuro
        document.body.style.backgroundColor = '#111';
        if (document.getElementsByClassName("menulogin")[0]) {
            document.getElementsByClassName("menulogin")[0].style.borderColor = "rgba(255, 255, 255, 0.2)";
        }

        
        localStorage.setItem('tema', 'dark');

        
        if (checkbox) checkbox.checked = false;
    }

    console.log('ID atual do elemento:', elemento.id);
}


window.onload = function () {
    const temaSalvo = localStorage.getItem('tema');
    const checkbox = document.getElementById('mudartema');
    const elemento =
        document.getElementById('particles-js') ||
        document.getElementById('light-mode-particles');

   
    document.body.classList.add('notransition');

    if (temaSalvo === 'light') {
        if (elemento) elemento.id = 'light-mode-particles';
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'white';
        const menulogin = document.getElementsByClassName("menulogin")[0];
        if (menulogin) menulogin.style.borderColor = "black";
        if (checkbox) checkbox.checked = true;
    } else {
        if (checkbox) checkbox.checked = false;
    }

    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            document.body.classList.remove('notransition');
        });
    });
};