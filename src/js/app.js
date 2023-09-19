window.onload = function() { 
    const menu = document.querySelector("ul.menu");
    document.querySelector(".burger__menu-checkbox").onchange = function(){
        menu.classList.toggle("menu_active");
     }
};