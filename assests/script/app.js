let navLinks = document.getElementById("nav-links");
function hamburger() {
    window.matchMedia(navLinks.style.display = "flex");
}

function removeHamburger() {
    if (window.matchMedia(navLinks.style.display === "flex")) {
        window.matchMedia(navLinks.style.display = "none");
        console.log('Hamburger Removed');
    }
}

function searchNavigator() {
    let mobileNavigation = document.getElementById("mobile-search");
    // Search Navigation 
    let searchNavigation = document.getElementById("search-navigation");
    window.matchMedia(searchNavigation.style.display = "flex");


    mobileNavigation.innerHTML = `<i class="fa-solid fa-xmark" onclick="removeSearchNav()"></i>`
}

function removeSearchNav() {
    let searchNavigation = document.getElementById("search-navigation");
    window.matchMedia(searchNavigation.style.display = "none");

    let mobileNavigation = document.getElementById("mobile-search");
    mobileNavigation.innerHTML = `<i class="fa-solid fa-magnifying-glass" onclick = searchNavigator()></i>
    `
}