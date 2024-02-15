const product = [
    {
        id: 0,
        image: 'image/PizzaChicken.png',
        title: 'Pizza Chicken',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 1,
        image: 'image/Pizza4cheese.png',
        title: 'Pizza 4cheese',
        price: 90,
        gramaj: 500 + ' g',
    },
    {
        id: 2,
        image: 'image/PizzaCarbonara.png',
        title: 'Pizza Carbonara',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 3,
        image: 'image/PizzaAsortDeCarne.png',
        title: 'Pizza Asort De Carne',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 4,
        image: 'image/PizzaCapricioasa.png',
        title: 'Pizza Capricioasa',
        price: 95,
        gramaj: 500 + ' g', 
    },
    {
        id: 5,
        image: 'image/BlineleMarPui.png',
        title: 'Blinele Măr-Pui',
        price: 70,
        gramaj: 300 + ' g',
    },
    {
        id: 6,
        image: 'image/BlinelePuiAnanas.png',
        title: 'Blinele Pui-Ananas',
        price: 75,
        gramaj: 310 + ' g',
    },
    {
        id: 7,
        image: 'image/BlinelePuiCiuperci.png',
        title: 'Blinele Pui-Ciuperci',
        price: 75,
        gramaj: 310 + ' g',
    },
    {
        id: 8,
        image: 'image/BlineleCuSomon.png',
        title: 'Blinele Cu Somon.png',
        price: 110,
        gramaj: 280 + ' g',
    },
    {
        id: 9,
        image: 'image/BlineleȘuncăRoșii.png',
        title: 'Blinele Șuncă-Roșii',
        price: 75,
        gramaj: 300 + ' g',
    },
    {
        id: 10,
        image: 'image/BlineleBaconParmezan.png',
        title: 'Blinele Bacon Parmezan',
        price: 75,
        gramaj: 285 + ' g',
    },
    {
        id: 11,
        image: 'image/BlineleBrânzăVerdeață.png',
        title: 'Blinele Brânză Verdeață',
        price: 55,
        gramaj: 210 + ' g',
    },
    {
        id: 12,
        image: 'image/BlineleNutellaBanana.png',
        title: 'Blinele Nutella-Banana',
        price: 65,
        gramaj: 250 + ' g',
    },
    {
        id: 13,
        image: 'image/BlineleVișine.png',
        title: 'Blinele Vișine',
        price: 55,
        gramaj: 250 + ' g',
    },
    {
        id: 14,
        image: 'image/BlineleFrișcăPortocale.png',
        title: 'Blinele Frișcă-Portocale',
        price: 55,
        gramaj: 250 + ' g',
    },
    {
        id: 15,
        image: 'image/Set2.png',
        title: 'Sushi Set 2',
        price: 310,
        gramaj: 30 + ' buc',
    },
    {
        id: 16,
        image: 'image/SetHinata.png',
        title: 'Sushi Set Hinata',
        price: 365,
        gramaj: 38 + ' buc',
    },
    {
        id: 17,
        image: 'image/Placinta.png',
        title: 'Plăcintă',
        price: 20,
        gramaj: 250 + ' g',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

var displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { id, image, title, price ,gramaj} = item;
        return (
            `<a href='${id}.html'>
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2> ${price}.00 lei</h2><h5>${gramaj}</h5>
                <button>Add to cart</button>
                </div>
            </div>
            </a>`
        )
    }).join('')
};
displayItem(categories);


/*click popup and close popup */

const boxes = document.querySelectorAll('.box');
var popup = document.getElementById('popup');
const x = document.querySelector('.popup .close h1');
var box = document.querySelector('.box');


/*for dropdown*/ 
let bars = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

bars.onclick = function(){
    header.classList.toggle('open');
}