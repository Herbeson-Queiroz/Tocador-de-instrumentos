function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (contador = 0; contador < listaDeTeclas.length; contador++) {
    
    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function() {
        tocaSom(idAudio);
     };

     tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
        }
     }

     tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
     }
}
