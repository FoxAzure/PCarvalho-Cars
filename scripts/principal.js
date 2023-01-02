

function listacarros(){

    var caixa, pesquisa, lista, listaItem, item, i;

    caixa = document.getElementById("caixa-pesquisa");
    pesquisa = caixa.value.toUpperCase();
    lista = document.getElementsByClassName("lista-carros");
    listaItem = lista.getElementsByTagName("li");

    var tamanho_lista = lista.length;
    alert(tamanho_lista)

    for(i = 0; i<=lista.length; i++){
        item = listaItem[i].getElementsByTagName("li")[0];
        if(item.innerHTML.toUpperCase().indexOf(pesquisa)>-1){
            listaItem[i].style.display="";
        }else{
            listaItem[i].style.display="none";
        };
    };
};


//Pesquisa Tabela - Novo
function pesquisarTabela(){
    const input = document.getElementById('caixa-pesquisa');
    const trs = [...document.querySelectorAll('.lista-carros p')];

    input.addEventListener('input', () => {
    const search = input.value.toLowerCase();
    trs.forEach(el => {
    const matches = el.textContent.toLowerCase().includes(search);
    el.style.display = matches ? '' : 'none';
  });
});
}


var carros_lista = [
    {nome: 'fiat-strada', titulo: "Fiat_Strada", foto: 'galery/carros/Fiat-Strada-001.jpg'},
    {nome: 'hyundai-hb20', titulo: "Hyundai_HB20", foto: 'galery/carros/hyundai-hb20-001.jpg'}
]


function selectCar(carro){

    var i, bg_car, nome_carro;

    for(i=0;i<carros_lista.length;i++){

        
        nome_carro = carros_lista[i].nome;

        if(nome_carro == carro){
            bg_car = carros_lista[i].foto;
            titulo = carros_lista[i].titulo;
        }
    }

    

    document.getElementById('carro-select').style.backgroundImage = 'url('+bg_car+')';
    document.getElementById('nome-carro').innerHTML = titulo;

}


















//Pesquisa Tabela - Novo
function pesquisarTabelaaaa(){
    const input = document.getElementById('pesquisa');
    const trs = [...document.querySelectorAll('#lista_campos tbody tr')];

    input.addEventListener('input', () => {
    const search = input.value.toLowerCase();
    trs.forEach(el => {
    const matches = el.textContent.toLowerCase().includes(search);
    el.style.display = matches ? '' : 'none';
  });
});
}

function pesquisar(){
    var input, filtro, menu, menuItens, links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
        links = menuItens[i].getElementsByTagName("a")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
            menuItens[i].style.display="";
        }else{
            menuItens[i].style.display="none";
        }
    }
}