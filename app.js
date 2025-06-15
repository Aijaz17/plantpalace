let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('mouseover', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Prayer Plant',
        image: '1.jpg',
        price: 1000
    },
    {
        id: 2,
        name: 'Money Plant',
        image: '2.jpg',
        price: 880
    },
    {
        id: 3,
        name: 'Egg Plant',
        image: '3.jpg',
        price: 2100
    },
    {
        id: 4,
        name: 'Cactus',
        image: '4.jpg',
        price: 1200
    },

    {
        id: 5,
        name: 'Marigold',
        image: '5.jpg',
        price: 3200
    },
    {
        id: 6,
        name: 'Rose',
        image: '6.jpg',
        price: 17000
    },
    {
        id: 7,
        name: 'Alocasia Sabrina',
        image: '7.jpg',
        price: 1200
    },
    {
        id: 8,
        name: 'Dracaena trifasciata',
        image: '8.jpg',
        price: 1280
    },
    {
        id: 9,
        name: 'Alocasia ',
        image: '10.jpg',
        price: 1200
    },
    {
        id: 10,
        name: 'Alovera',
        image: '11.jpg',
        price: 1280
    }
];


let listCards  = [];

function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="removeprouducts(${key}, ${value.quantity-1})"><i class="fa-solid fa-trash"></i> </button>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function removeprouducts(key){
  
        delete listCards[key];
    reloadCard();

}
