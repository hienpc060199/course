let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

let slides2 = document.getElementsByClassName("mySlides2");
let dots2 = document.getElementsByClassName("dot2");

let slides3 = document.getElementsByClassName("mySlides3");
let dots3 = document.getElementsByClassName("dot3");

let slides4 = document.getElementsByClassName("mySlides4");
let dots4 = document.getElementsByClassName("dot4");

showSlides(slideIndex, slides, dots);
showSlides(slideIndex, slides2, dots2);
showSlides(slideIndex, slides3, dots3);
showSlides(slideIndex, slides4, dots4);

function currentSlide(n) {
  showSlides(slideIndex = n, slides, dots);
}

function currentSlide2(n) {
  showSlides(slideIndex = n, slides2, dots2);
}

function currentSlide3(n) {
  showSlides(slideIndex = n, slides3, dots3);
}

function currentSlide4(n) {
  showSlides(slideIndex = n, slides4, dots4);
}


function showSlides(n, slides, dots) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); 
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let clickEvent = document.querySelector(".event-click")
let clickNews = document.querySelector(".news-click")
let textEvent = document.querySelector(".event-text")
let textNews = document.querySelector(".new-text")

// console.log(clickEvent, clickNews)

clickNews.addEventListener('click', function()
{
  clickNews.classList.add('border-red');
  clickEvent.classList.remove('border-red');
  textNews.style.display = 'block';
  textEvent.style.display = 'none';
})

clickEvent.addEventListener('click', function()
{
  clickEvent.classList.add('border-red');
  clickNews.classList.remove('border-red');
  textNews.style.display = 'none';
  textEvent.style.display = 'block';
})