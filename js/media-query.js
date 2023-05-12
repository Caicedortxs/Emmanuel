let mainNav = document.getElementById("mainNav");
let menuBar = document.getElementById("menuBar");
let mainMenu = document.getElementById("mainMenu")

menuBar.addEventListener("click", function(){
    mainNav.classList.add("main-nav-2");
    if(mainMenu.classList.contains("main-menu")){
        mainMenu.classList.remove("main-menu")
        mainMenu.classList.add("main-menu-block")
        
    }
    else{
        mainMenu.classList.add("main-menu");
        mainMenu.classList.remove("main-menu-block");
    }
    mainNav.classList.remove("main-nav")
    mainMenu.classList.add("main-nav-2")
} )

alert("Para muertos de miedo")

