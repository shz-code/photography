window.addEventListener('scroll' , function () {
let header = document.querySelector('.header');
header.classList.toggle('scroll' , window.scrollY > 400);
});

let hamBtn = document.querySelector('.hamburgur-btn');

hamBtn.addEventListener('click' , () => {
 navToggle();
})

function navToggle() {
    
    let navbar = document.querySelector('.homepage nav ul');
    navbar.classList.toggle('active');
}

document.addEventListener('click' , (event) => {

    if (event.target.classList.contains('nav-link')) {

        navToggle();  
        console.log('true');  

    }

    console.log(event.target)
})


const portfolioItems = document.querySelectorAll('.portfolio-item'),
 btn = document.querySelector('.close-btn'),
 prevBtn = document.querySelector('.left'),
 nextBtn = document.querySelector('.right'),
 portfolioContainer = document.querySelector('.portfolio-items'),
 lightBox = document.querySelector('.lightbox');
 

//  itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);



 portfolioItems.forEach((item) => {
     
     item.addEventListener('click' , (event) => {
         
         document.querySelector(".lightbox").classList.add('active');
         
         
         btn.addEventListener('click' , () => {
             document.querySelector(".lightbox").classList.remove('active');
             yScroll();
             
            });
        }); 
        
        let wHeight = window.innerHeight;
        let wWidth = window.innerWidth;

        lightBox.querySelector('.img-box').style.maxHeight = wHeight + 'px';
        lightBox.querySelector('.img-box').style.maxWidth = wWidth + 'px';
});
    
    document.addEventListener('click' , (event)=>{
        if (event.target.classList.contains('lightbox')) {

            document.querySelector(".lightbox").classList.remove('active');

            console.log('true');
            yScroll();

        }
});
    
function noScroll() {
    document.body.classList.add('hide');
}

function yScroll() {
    document.body.classList.remove('hide');
}
    
    
    portfolioContainer.addEventListener('click' , (event)=>{  
        if (event.target.closest('.portfolio-item-inner')) {

            const portfolioItem = event.target.closest('.portfolio-item');

            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);

            
            
        }        
     slideShow();
     noScroll();
});

function slideShow() {
    
        let imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-item-inner img').getAttribute('data-large'),
        lightImg = document.querySelector('.light-box-inner img');

        lightImg.src = imgSrc;

        
        let portfolioTitle = portfolioItems[itemIndex].querySelector('.portfolio-item-inner p').innerHTML,
        counter =  lightBox.querySelector('.lightbox-counter').innerHTML =  (itemIndex+1) + ' of ' + 6;
        
        let lightText = document.querySelector('.lightbox-name').innerHTML = portfolioTitle;

    
}
nextBtn.addEventListener('click', () => {
if(itemIndex === portfolioItems.length-1){
    itemIndex = 0;
}
else{
    itemIndex++;
}
slideShow();
});


prevBtn.addEventListener('click', () => {
if(itemIndex === 0) {
    itemIndex = portfolioItems.length-1;
}
else {
    itemIndex--;
}
slideShow();
});


   
    
    

