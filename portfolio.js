var tabLinks = document.getElementsByClassName("tab-link"),
tabContents = document.getElementsByClassName("tab-contents");
function openTab (tabname) {
    for(item of tabLinks){
        item.classList.remove("active-link");
    }
    for (item of tabContents) {
        item.classList.remove ("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

//get sidemenu
var sidemenu = document.getElementById ("sidemenu");
function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu (){
    sidemenu.style.right = "-200px";
}