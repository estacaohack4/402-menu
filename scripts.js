let menu = new Menu();
menu.adicionarItem('Home');
menu.adicionarItem('Sobre', 'sobre.html');
menu.adicionarItem('Contato', '#contato');

document.querySelector('button').onclick = function(){
    if(menu.aberto){
        menu.fechar();
    }else{
        menu.abrir();
    }
} 