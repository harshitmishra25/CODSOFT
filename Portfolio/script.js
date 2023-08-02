var typing = new Typed (".typing",{

    strings : ["Web Developer",  "Web Designer"],
    typeSpeed:100,
    backSpeed :60,
    loop:true

});
window.onscroll = function(){
var navbar = document.getElementById("navbar");
 if(window.scrollY > 55){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
 let button = document.getElementById("btn");

    if(document.documentElement.scrollTop > 90){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }

};
function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}
function menu(){
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}