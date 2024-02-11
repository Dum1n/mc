


let slideImages = document.querySelectorAll('.slides img');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;

    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}


prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;

    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}


function autoSliding(){
    deletInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}

autoSliding();

/*const container = document.querySelector('.slide-container1');*/
const buttons = document.querySelector('.buttons');
const dotsContainer1 = document.querySelector('.dotsContainer1');

buttons.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

dotsContainer1.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

buttons.addEventListener('mouseout', autoSliding);
dotsContainer1.addEventListener('mouseout', autoSliding);



function indicators(){
    for( i = 0; i < dots.length; i++ ){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if( imageId == counter){
    return
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}
/*for dropdown*/ 
let bars = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

bars.onclick = function(){
    header.classList.toggle('open');
}
/*Search bar*/

/*let searchbtn = document.querySelector('.searchbtn');*/

/*let closebtn = document.querySelector('.closebtn');*/

/*let searchbox = document.querySelector('.searchbox');

searchbtn.onclick = function(){
    searchbox.classList.toggle('active');*/
    /*closebtn.classList.toggle('active');*/
    /*searchbtn.classList.toggle('active');
}*/

/*pop up*/ 

const popup = document.querySelector('.popup');
const x = document.querySelector('.popup-content h1');

window.addEventListener('load', () => {
    popup.classList.add('showpopup');
    popup.childNodes[1].classList.add('showpopup');
})

x.addEventListener('click', () => {
    popup.classList.remove('showpopup');
    popup.childNodes[1].classList.remove('showpopup');
})

/*Header scrolled*/
function headerscrolled(){
    var scrollValue = window.scrollY;
    var header = document.querySelector('.header');
    var bars = document.querySelector('.fa-bars');
    var TEXT = document.querySelector('.TEXT');
    console.log(scrollValue)

    if(scrollValue > 100){
        header.classList.add('active');
        bars.classList.add('active');
        TEXT.classList.add('active');
    } else{
        header.classList.remove('active');
        bars.classList.remove('active');
        TEXT.classList.remove('active');
    }
}

window.addEventListener('scroll', headerscrolled);


