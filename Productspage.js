const product = [
    {
        id: 0,
        image: 'PizzaChicken.png',
        title: 'Pizza Chicken',
        price: 100,
    },
    {
        id: 1,
        image: 'Pizza4cheese.png',
        title: 'Pizza 4cheese',
        price: 90,
    },
    {
        id: 2,
        image: 'BlinelecuCiuperci.png',
        title: 'Blinele cu ciuperci',
        price: 230,
    },
    {
        id: 3,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 4,
        image: 'image/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 5,
        image: 'image/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
    },
    {
        id: 6,
        image: 'image/PizzaChicken.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 100,
    },
    {
        id: 7,
        image: 'image/cc-3.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 8,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 9,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: 100,
    },
    {
        id: 10,
        image: 'image/bb-1.jpg',
        title: 'Audio Microphone',
        price: 230,
    },
    {
        id: 11,
        image: 'image/cc-1.jpg',
        title: 'Smart Watch',
        price: 100,
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
        var { id, image, title, price } = item;
        return (
            `<a href='${id}.html'>
            <div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2> ${price}.00 lei</h2>
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
