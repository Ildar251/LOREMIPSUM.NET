window.onload = function() { 
    const menu = document.querySelector("ul.menu");
    document.querySelector(".burgerMenu-checkbox").onchange = function(){
        menu.classList.toggle("menu_active");
     }
};