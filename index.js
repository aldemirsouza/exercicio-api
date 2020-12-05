import api from './api.js'

const listProducts = document.querySelector('.product-list');
const listTotal = document.querySelector('.content_total');

function printProducts({item}){
    item.forEach(({name, image, quantity, bestPriceFormated}) =>{
        const listProd = document.createElement('li');
        listProd.innerHTML = `
            <div class="content">
                <div class="content_item">
                    <div class="content_item_img">
                        <img src="${image}"/>
                    </div>

                    <div class="content_desc">
                        <h2>${name}</h2> 
                        <p>Qtd: ${quantity} <strong>${bestPriceFormated}</strong></p>
                    </div>
                </div>
            </div>
        `;
        
        listProducts.appendChild(listProd);
   });

   const priceTotal = item.reduce(function(acc, {quantity, bestPrice}){
        return acc + (quantity * bestPrice);
    }, 0 ) / 100;

    var total = priceTotal.toLocaleString('pt-br', {style: 'currency', currency:'BRL'});
    listTotal.innerHTML = `<p>Total do pedido: <span> ${total}</span></p>`;
}

/*
function limitName({item}, max){
   const newName = item.reduce((acc, letter, index) =>{
       if(index >= max) return acc;
       if(index >= max) return acc + '...';
        return acc + letter;
   }, '');

   return newName; 
}


const limitedName = limitName(listProducts, 20);
console.log(limitedName);*/


const config ={
    method: 'GET',
    url: 'products.json',
    data: null
}

api(config, printProducts);


//Neste exercício você deve imprimir na UL ".product-list" produtos seguindo o layout no README do gitbub: https://i.imgur.com/EbVlWpX.png
//Deve incluir a soma dos produtos
//O botão finalizar compra deve ter o href de "/checkout"
