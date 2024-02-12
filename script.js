

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const loader = document.getElementById("loader")
const fixed = document.getElementById("fixedImage");
const elems = document.querySelector(".elems");
const elem = document.querySelectorAll(".elem");


const full  = document.getElementById("full-scr");
const menu  = document.querySelector(".menu");
const navLogo =document.querySelector('.logo');
let flag=0;

menu.addEventListener('click',()=>{
  if(flag == 0){
      full.style.top = '8%'
      navLogo.style.opacity = 0;
      flag = 1;
  }else{
      full.style.top= '-100%';
      navLogo.style.opacity=1;
      flag=0;
  }
})


elems.addEventListener('mouseenter',()=>{
    fixed.style.display="block"
});

elems.addEventListener('mouseleave',()=>{
    fixed.style.display='none'
});

elem.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        const image = e.getAttribute('data-image')
        fixed.style.backgroundImage = `url(${image})`
    })

})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    centeredSlides: true,
    spaceBetween: 100,
  });

  setTimeout(function(){
    loader.style.top= '-100%';
  },3500)

