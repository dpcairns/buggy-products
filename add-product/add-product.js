import { getBakedGoods } from '../common/utils.js';
import renderBakedGoods from './render-baked-goods.js';


const bakedGoods = getBakedGoods();
const list = document.getElementById('bakedGoods');
//id tag on products, html page
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const myForm = document.querySelector('form');
    const bakedGoodData = new FormData(myForm);

    const numberizedPrice = Number(bakedGoodData.get('price'));
    
    const newBakedGood = {
        name: bakedGoodData.get('name'),
        id: bakedGoodData.get('id'),
        price: numberizedPrice,
        image: bakedGoodData.get('image')
    };

    bakedGoods.push(newBakedGood);
        
    localStorage.setItem('bakedGoods', bakedGoods);
    
    const newRenderedBakedGood = renderBakedGoods(newBakedGood);
    newRenderedBakedGood.querySelector('button').remove();
    list.appendChild(newRenderedBakedGood);

    
});
for (let i = 0; i < bakedGoods.length; i++) {
    const bakedGood = bakedGoods[i];
    newRenderedBakedGood.querySelector('button').remove();
        
    list.appendChild(newRenderedBakedGood);
}