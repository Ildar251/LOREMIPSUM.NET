window.onload = function() { 
    document.body.classList.add('loaded_hiding')
    document.html.classList.add('hidden')
    window.setTimeout(function () {
        document.body.classList.add('loaded')
        document.body.classList.remove('loaded_hiding')
        document.html.classList.remove('hidden')
    }, 500)


    const menu = document.querySelector("ul.menu");
    document.querySelector(".burgerMenu-checkbox").onchange = function(){
        menu.classList.toggle("menu_active");
     }

     let tl = gsap.timeline({});
     tl.fromTo('.header', {y: '-150%'}, {y: 0} )
     tl.fromTo('.main__title', {x: '-150%'}, {x: 0} )
     tl.fromTo('.main__list', {x: '-150%'}, {x: 0} )
     tl.fromTo('.buttons', {x: '-150%'}, {x: 0} )
};

