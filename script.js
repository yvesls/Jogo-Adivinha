let geraNumero = Math.random()*100; // gera número
geraNumero = Math.round(geraNumero); // arredonda número

// let bg = document.getElementById('body');
// bg.style.background = 'url(imagens/bgadvinha.jpg)';
// bg.style.width = '100%';
//bg.style.backgroundColor = 'rgba(2, 2, 2, 0.756);';
var chute;
var arrayChutes = [];
var incluir = [];
var x = 1;

let trilha = document.getElementById("myaudio"); 
trilha.volume = 0.05;

// chamando a função turnoExibe ao clicar em enter
function clickEnter(event){
    if(event.keyCode == 13){
        turnoExibe();
    }
}
// chamando função ao clicar no button
const clickChute = document.querySelectorAll('button');

for(var i = 0; i < clickChute.length; i++){
    clickChute[i].addEventListener('click', turnoExibe);
}



let imgAnimacao = document.getElementById('insereTexto'); 
// função exibe turno e testa valor
function turnoExibe(){
    trilha.play();
    chute = document.getElementById('numChute').value;
    if(chute == ''){
        chute = 0;
    }
    arrayChutes.push(chute);
    
    let lista = arrayChutes.join(' - ');
    document.getElementById('insere').innerHTML = lista;
    document.getElementById('insere').style.color = 'white';
    document.getElementById('insere').style.paddingTop = '10px';
    document.getElementById('insere').style.marginBottom = '-10px';
    document.getElementById('insere').style.fontSize = '1.4em';
    document.getElementById('numChute').value = '';
    
    var diferenca = null;

    if(chute > geraNumero){
        var diferenca = chute - geraNumero;
    }
    else{
        var diferenca = geraNumero - chute;
    }

    if(diferenca < 5){
        document.getElementById('insereTexto').innerHTML = 'Opa, está muito quente!';
        document.getElementById('insereTexto').style.color = 'red';
    }
    else if(diferenca < 15){
        document.getElementById('insereTexto').innerHTML = 'Opa, está quente.';
        document.getElementById('insereTexto').style.color = 'orange';
    }
    else if(diferenca < 30){
        document.getElementById('insereTexto').innerHTML = 'Opa, está frio.';
        document.getElementById('insereTexto').style.color = 'rgb(36, 73, 240)';
    }
    else{
        document.getElementById('insereTexto').innerHTML = 'Opa, está muito frio.';
        document.getElementById('insereTexto').style.color = 'aqua';
    }
    document.getElementById('insereTexto').style.textShadow = '1px 1px 1px black';
    document.getElementById('insereTexto').style.paddingBottom = '10px';
    document.getElementById('insereTexto').style.fontSize = '1.4em';
    document.getElementById('insereTexto').style.textShadow = '2px 2px black';

    
    
    
    if(chute == geraNumero){
        let vitoria = document.getElementById('audio2');
        vitoria.play();
        vitoria.volume = 0.1;
        trilha.pause();

        

        $('#modalRegistraDespesa').modal('show')// 6 //usando atributo do jquery para exibir aba após o click
        
        document.getElementById('modal_titulo').innerHTML = 'Parabéns, você ganhou!' //representa o conteudo interno //selecionando o elemento no dom
        document.getElementById('modal_titulo_div').className = 'modal-header text-success' //aplicando a cor da classe em sucesso
        document.getElementById('modal_conteudo').innerHTML = 'Acertaste o número dentro do limite de tentativas.'
        document.getElementById('modal_btn').innerHTML = 'Jogar Novamente'
        document.getElementById('modal_btn').className = 'btn btn-success'
        
    }
    else if(x < 10 && chute != geraNumero){
        x++;
        imgAnimacao.style.fontSize = '1.5em';
        imgAnimacao.style.transition = 'font-size 0.5s';
    }
    // corrigindo problema, caso acerte na ultima tentativa
    else if(x == 10){
        if(chute == geraNumero){
           
            $('#modalRegistraDespesa').modal('show')// 6 //usando atributo do jquery para exibir aba após o click
        
            document.getElementById('modal_titulo').innerHTML = 'Parabéns, você ganhou!' //representa o conteudo interno //selecionando o elemento no dom
            document.getElementById('modal_titulo_div').className = 'modal-header text-success' //aplicando a cor da classe em sucesso
            document.getElementById('modal_conteudo').innerHTML = 'Acertaste o número dentro do limite de tentativas.'
            document.getElementById('modal_btn').innerHTML = 'Jogar Novamente'
            document.getElementById('modal_btn').className = 'btn btn-success'
        }
        let derrota = document.getElementById('audio3');
        derrota.play();
        derrota.volume = 0.1;
        trilha.pause();
        $('#modalRegistraDespesa').modal('show')// 6
        
        document.getElementById('modal_titulo').innerHTML = 'Que pena, fim de jogo!'
        document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
        document.getElementById('modal_conteudo').innerHTML = 'Você não acertou o número dentro do limite de tentativas. Resposta: ' + geraNumero;
        document.getElementById('modal_btn').innerHTML = 'Jogar Novamente'
        document.getElementById('modal_btn').className = 'btn btn-danger'
    }
}

function reload(){
    window.location.href = 'index.html';
}