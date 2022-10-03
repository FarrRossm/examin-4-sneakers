"use strict";


// Carousel method

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth); 


// arrange the slides nex to another
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px' ;
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    // return moveToSlide;
}


const updateDots =  (currentDot, targetDot) => {
    currentDot.classList.remove('.current-slide');
    targetDot.classList.add('.current-slide');
};


// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    // updateDots(currentDot, targetDot);
});
// When I click right, move slides to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, targetDot)
});

//  WhenI click the nav indicators, move to that slide


 dotsNav.addEventListener( 'click', e => {
    // what was indicator clicked on?
    const targetDot = e.target.closest('.current-slide');
    
    
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    

    updateDots(currentDot, targetDot);
})




















let price = 125
let totalPrice = 125
let count = 1

function calculateTotalPrice() {
    totalPrice = count * price
}

function render() {
    const elTotalPrice= document.getQuerySelector('.total-price');
    elTotalPrice.innerHTML(totalPrice)

    const elCount= document.getQuerySelector('.count');
    elCount.innerHTML(count)

    
}



let countNum = 0;
$('.plus-btn').addEventListener('click',()=>{
    countNum++
    $('.count-show').innerHTML = ""
    $('.count-show').innerHTML = countNum
})

$('.min-btn').addEventListener('click',()=>{
        countNum--
        $('.count-show').innerHTML = ""
    $('.count-show').innerHTML = countNum
    
})



// Modal card ////


const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const qaytish =document.getElementById('qaytish');
const ochish =document.getElementById('ochish');


open.addEventListener('click', () =>{
    modal_container.classList.add('show');
    $('.modal-information').innerHTML  = `125.00 $ * ${countNum} = ${countNum*125}`
} );

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
} );
qaytish.addEventListener('click', () =>{
    modal_container.classList.remove('show');
} );
ochish.addEventListener('click', () =>{
    modal_container.classList.add('show');
    $('.modal-information').innerHTML  = `125.00 $ * ${countNum} = ${countNum*125}`
} );



$('.night').addEventListener('click',()=>{
    $('body').style.backgroundColor = 'black'   ;
   
        if($(".night").checked)  {
            $('body').style.backgroundColor = 'white'   ;
        }
    
})
       
      
       
// $('.night').addEventListener('click',()=>{
//     $('body').style.backgroundColor = 'white'   ;
// })
             
       
   








