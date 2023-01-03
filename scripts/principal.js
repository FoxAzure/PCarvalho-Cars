

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
    {
        id:         01,
        nome:       'Strada',
        marca:      'Fiat',
        category:   'Picape compacta',
        descr:      'É a picape pequena de maior sucesso no Brasil e a líder no segmento. Introduziu novidades na categoria como a opção de cabine dupla',
        foto:       'galery/carros/fiat_strada_2023_1_29072022_71924_1280_960.jpg',
        galery1:    'galery/carros/fiat_strada_2023_1_16082022_72018_1280_960.jpg',
        galery2:    'galery/carros/fiat_strada_2023_1_29072022_71922_1280_960.jpg',
        galery3:    'galery/carros/fiat_strada_2023_1_29072022_71923_1280_960.jpg',
        galery4:    'galery/carros/fiat_strada_2023_1_29072022_71926_1280_960.jpg',
    },

    {
        id:         02,
        nome:       'HB20',
        marca:      'Hyundai',
        category:   'Hatch compacto',
        descr:      'Primeiro modelo nacional desenvolvido pela Hyundai para o Brasil. Fabricado em Piracicaba desde 2012.',
        foto:       'galery/carros/hyundai_hb20_2023_1_02072022_71753_1280_960.jpg',
        galery1:    'galery/carros/hyundai_hb20_2023_1_02072022_71752_1280_960.jpg',
        galery2:    'galery/carros/hyundai_hb20_2021_1_11072020_31392_1280_960.jpg',
        galery3:    'galery/carros/hyundai_hb20_2023_1_06072022_71771_1280_960.jpg',
        galery4:    'galery/carros/hyundai_hb20_2023_1_06072022_71772_1280_960.jpg',
    },

    {
        id:         03,
        nome:       'Onix',
        marca:      'Chevrolet',
        category:   'Hatch compacto',
        descr:      'É produzido em Gravataí desde 2012 e em 2015 passou a ser o carro mais vendido do Brasil.',
        foto:       'galery/carros/chevrolet_onix_2021_1_24022022_70721_1280_960.jpg',
        galery1:    'galery/carros/chevrolet_onix_2021_1_14022021_46195_1280_960.jpg',
        galery2:    'galery/carros/chevrolet_onix_2021_1_14022021_46197_1280_960.jpg',
        galery3:    'galery/carros/chevrolet_onix_2020_1_06092019_15700_1280_960.jpg',
        galery4:    'galery/carros/chevrolet_onix_2021_1_23092020_34062_1280_960.jpg',
    },

]


function selectCar(carro_id){

    var i, bg_car, lista_id, nome_carro;

    for(i=0;i<carros_lista.length;i++){

        
        lista_id = carros_lista[i].id;

        if(lista_id == carro_id){
            bg_car      = carros_lista[i].foto;
            nome_carro  = carros_lista[i].nome;
            marca_carro  = carros_lista[i].marca;
            category_carro  = carros_lista[i].category;
            descr_carro  = carros_lista[i].descr;
            img01       = carros_lista[i].galery1;
            img02       = carros_lista[i].galery2;
            img03       = carros_lista[i].galery3;
            img04       = carros_lista[i].galery4;
        }
    }

    

    document.getElementById('tela').style.backgroundImage = 'url('+bg_car+')';
    document.getElementById('nome-carro').innerHTML = nome_carro;
    document.getElementById('foto1').style.backgroundImage = 'url('+img01+')';
    document.getElementById('foto2').style.backgroundImage = 'url('+img02+')';
    document.getElementById('foto3').style.backgroundImage = 'url('+img03+')';
    document.getElementById('foto4').style.backgroundImage = 'url('+img04+')';
    document.getElementById('nome').innerHTML = nome_carro;
    document.getElementById('marca').innerHTML = marca_carro;
    document.getElementById('categoria').innerHTML = category_carro;
    document.getElementById('descricao').innerHTML = descr_carro;

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