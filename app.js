window.onload=function(){
    const menu = document.getElementById('hamburger-menu');
    const dropdown = document.querySelector(".dropdown");
    menu.addEventListener('click', () => {
    if (dropdown.style.display == "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
    
   })
}


