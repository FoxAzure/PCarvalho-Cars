

function listacarros(){

    var caixa, pesquisa, lista, listaItem, item, i;

    caixa = document.getElementById("caixa-pesquisa");
    pesquisa = caixa.value.toUpperCase();
    lista = document.getElementsByClassName("lista-carros");
    listaItem = lista.getElementsByClassName("tag-car");

    var tamanho_lista = lista.length;
    alert(tamanho_lista)

    for(i = 0; i<=lista.length; i++){
        item = listaItem[i].getElementsByClassName("tag-car")[0];
        if(item.innerHTML.toUpperCase().indexOf(pesquisa)>-1){
            listaItem[i].style.display="";
        }else{
            listaItem[i].style.display="none";
        };
    };
};

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