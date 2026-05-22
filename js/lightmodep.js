function lightmodep() {
            const elemento = document.getElementById('particles-js') || document.getElementById('light-mode-particles');
            
            // Alterna entre os IDs
            if (elemento.id === 'particles-js') {
                elemento.id = 'light-mode-particles';
            } else {
                elemento.id = 'particles-js';
            }
            
            console.log('ID atual do elemento:', elemento.id);

            localStorage.setItem('tema', 'light'); 
}

