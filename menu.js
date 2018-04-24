class Menu{
    constructor(){
        this.aberto = true;
        this.elemento = document.createElement('nav');
        
        document.body.appendChild(this.elemento);
    }
    
    adicionarItem(nome, link = ''){
        let item = document.createElement('a');
        item.href = link;
        item.innerHTML = nome;

        this.elemento.appendChild(item);
    }

    abrir(){
        this.elemento.classList.remove('oculto');
        this.aberto = true;
    }
    
    fechar(){
        this.elemento.classList.add('oculto');
        this.aberto = false;
    }
}