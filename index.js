let searchNavigation = document.getElementById("search-navigation");
let searchSuggestionContainer = document.getElementById("search-suggestion")
var mobileProducts = {
    Apple: {
        Iphone6: {
            Name: "Iphone 6",
            type: "Mobile",
            color: "Black",
            ram: "1gb",
            rom: "64gb",
            batteryTime: "1,810mAh",
            display: "4.7 inches",
            profilePicture: "./assests/Media/iphone6.jpeg",
            Prices: "43,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone8: {
            Name: "Iphone 8",
            type: "Mobile",
            color: "Gold",
            ram: "2gb",
            rom: "256gb",
            batteryTime: "1821mAh",
            display: "4.7 inches",
            profilePicture: "./assests/Media/iphone8.jpeg",
            Prices: "108,610",
            Pta: true,
            avalaible: true,
            cart: false
        },
        iphoneX: {
            Name: "Iphone X",
            type: "Mobile",
            color: "White",
            ram: "3gb",
            rom: "256gb",
            batteryTime: "2716mAh",
            display: "5.8 inches",
            profilePicture: "./assests/Media/iphneX.jpeg",
            Prices: "144,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone11: {
            Name: "Iphone 11",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "3110mAh",
            display: "5.8 inches",
            profilePicture: "./assests/Media/iphone11.jpeg",
            Prices: "178,000",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone12: {
            Name: "Iphone 12",
            type: "Mobile",
            color: "Gray",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "2815mAh",
            display: "6.1 inches",
            profilePicture: "./assests/Media/iphone12.jpeg",
            Prices: "179,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        Iphone14: {
            Name: "Iphone 14",
            type: "Mobile",
            color: "Gray",
            ram: "6gb",
            rom: "256gb",
            batteryTime: "3279mAh",
            display: "6.1 inches",
            profilePicture: "./assests/Media/Iphone14-img.jpeg",
            Prices: "179,999",
            Pta: true,
            avalaible: true,
            cart: false
        }
    },
    Samsung: {
        galaxy_S21: {
            Name: "Galaxy S21",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            batteryTime: "4000mAh",
            display: "6.2 inches",
            profilePicture: "./assests/Media/galaxy-S21.jpeg",
            Prices: "176,499",
            Pta: true,
            avalaible: true,
            cart: false
        },
        galaxy_A35: {
            Name: "Galaxy A35",
            type: "Mobile",
            color: "Aqua",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./assests/Media/galaxy_A35.jpeg",
            Prices: "114,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        galaxy_A06: {
            Name: "Galaxy A05",
            type: "Mobile",
            color: "Green",
            ram: "6gb",
            rom: "128gb",
            batteryTime: "5000mAh",
            display: "6.7 inches",
            profilePicture: "./assests/Media/galaxy-A05.jpeg",
            Prices: "36,499",
            Pta: true,
            avalaible: true,
            cart: false
        }
    },
    Infinix: {
        hot_40_pro: {
            Name: "Hot 40 Pro",
            type: "Mobile",
            color: "Black",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./assests/Media/hot_40.jpeg",
            Prices: "45,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        note_40: {
            Name: "Note 40",
            type: "Mobile",
            color: "Green",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "2815mAh",
            display: "6.78 inches",
            profilePicture: "./assests/Media/note_40.jpeg",
            Prices: "54,999",
            Pta: true,
            avalaible: true,
            cart: false
        },
        hot_30: {
            Name: "Hot 30",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "128gb",
            batteryTime: "5000mAh",
            display: "6.78 inches",
            profilePicture: "./assests/Media/hot_30.jpg",
            Prices: "34,999",
            Pta: true,
            avalaible: true,
            cart: false
        }

    },
    Tecno: {
        pova_06_pro: {
            Name: "Pova 06 Pro",
            type: "Mobile",
            color: "Silver",
            ram: "6gb",
            rom: "128gb",
            batteryTime: "6000mAh",
            display: "6.78 inches",
            profilePicture: "./assests/Media/pova_06_pro.jpeg",
            Prices: "24,799",
            Pta: true,
            avalaible: true,
            cart: false
        },
        spark_20: {
            Name: "Spark 20",
            type: "Mobile",
            color: "Black",
            ram: "8gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.6 inches",
            profilePicture: "./assests/Media/spark_20.jpeg",
            Prices: "31,799",
            Pta: true,
            avalaible: true,
            cart: false
        },
        camon_20: {
            Name: "Camon 20",
            type: "Mobile",
            color: "Serenity Blue",
            ram: "4gb",
            rom: "256gb",
            batteryTime: "5000mAh",
            display: "6.67 inches",
            profilePicture: "./assests/Media/camon_20.jpeg",
            Prices: "41,499",
            Pta: true,
            avalaible: true,
            cart: false
        }
    }

}

let productContainer;
let productCard;

function showingDom() {

    for (var phones in mobileProducts) {
        for (var mobileType in mobileProducts[phones]) {
            productContainer = document.getElementById("product-container");
            // Product Card 
            let productCard = document.createElement("div");
            productCard.className = "product-card";
            productContainer.appendChild(productCard);
            // Product Content 
            let productContent = document.createElement("div");
            productContent.setAttribute("id", "product-content");
            productCard.appendChild(productContent);
            productContent.setAttribute("onmouseenter", "viewMoreShow(this)");
            productContent.setAttribute("onmouseover", "viewMoreShow(this)");
            productContent.setAttribute("onmouseleave", "viewMoreHide(this)");

            // View More Button 
            let viewMoreButton = document.createElement("p");
            viewMoreButton.className = "view-more";
            viewMoreButton.innerText = "Quic-View >>";
            viewMoreButton.setAttribute("onclick", "showSpecs(this)")
            productCard.appendChild(viewMoreButton);



            // Product COntent InnerHtml 
            productContent.innerHTML = `
        <div class = "productImageContainer" >
        <img src = "${mobileProducts[phones][mobileType].profilePicture}"/>
        </div>
        <div class = "product-about">
        <p>${mobileProducts[phones][mobileType].Name}</p>
        <span>Rs ${mobileProducts[phones][mobileType].Prices}</span>
        </div>
        `
            // Pta Tag 
            if (mobileProducts[phones][mobileType].Pta) {
                let ptaTag = document.createElement("div");
                ptaTag.className = "pta-tag-container";
                ptaTag.innerHTML = `
            <img src = "./assests/Media/PTA-approved.png" alt = "Pta-logo" />
            `
                productContent.appendChild(ptaTag);
            }
            // // Specs Container
            let availablility;
            if (mobileProducts[phones][mobileType].avalaible === true) {
                availablility = "Available in Stocks";
            } else {
                availablility = "Out of Stock";
            }

            let specsContainer = document.createElement("div");
            specsContainer.setAttribute("id", "specs-container");
            specsContainer.innerHTML = `<div class= "cross-icon" onclick = "removeSpecs(this)">
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div class = "specs-content">
        <div class="specs-image">
        <img src = "${mobileProducts[phones][mobileType].profilePicture}"/>
        </div>
        
        <div class = "specs-about">
        <h1>${mobileProducts[phones][mobileType].Name}</h1>
        <span id= "availablility"> ${availablility}</span>
        <div class = "gen-info">
        <span>Color : ${mobileProducts[phones][mobileType].color}</span>
        <span>Memory : ${mobileProducts[phones][mobileType].ram} / ${mobileProducts[phones][mobileType].rom}</span>
        <span>Display : ${mobileProducts[phones][mobileType].display}</span>
        <span>Battery : ${mobileProducts[phones][mobileType].batteryTime}</span>
        </div>
        <span id= "price-tag">Prices : ${mobileProducts[phones][mobileType].Prices}</span>
        <div class = "specs-btn-container">
        <button id="cart-btn" onclick= "addingItemCart(this)"> Add to Cart </button>
        <button id="like-btn"> Like </button>
        </div>
        </div>
        
        </div>`
            productCard.appendChild(specsContainer);
        }

    }
}

showingDom();


function viewMoreShow(element) {
    let viewMoreButton = element.parentElement.firstChild.nextSibling;
    viewMoreButton.style.display = "flex";
    element.classList.add("filter");
}


function viewMoreHide(element) {
    let viewMoreButton = element.parentElement.firstChild.nextSibling;
    viewMoreButton.style.display = "none"
    element.classList.remove("filter");
}

// Specification Function 
function showSpecs(element) {
    let specsBoxContainer = element.parentElement.firstChild.nextSibling.nextSibling;
    let productContent = document.getElementById("product-content");
    productContent.style.zIndex = "-1";
    specsBoxContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
    specsBoxContainer.classList.add("back-drop-filter");
}


function removeSpecs(element) {
    let specsBoxContainer = element.parentElement;
    specsBoxContainer.style.display = "none";
    document.body.style.overflowY = "scroll";
}


// // add to Cart 
// let cartCounter = document.getElementById('cart-count');
// let cartItem = 0;
// function addingItemCart(element) {
//     cartItem++;
//     cartCounter.innerText = cartItem;
// }


// Item Search Functionality 
let phoneSelect = document.getElementById("phone-select");
let modelSelect = document.getElementById("model-select");
for (var mobilePhones in mobileProducts) {
    let phoneOption = document.createElement("option");
    phoneOption.value = mobilePhones;
    phoneOption.innerText = mobilePhones;
    phoneSelect.appendChild(phoneOption);
}

// Search Selection Filter

function setPhoneValue() {
    // Model Options 
    let phoneSearchValue = document.getElementById("phone-select").value;
    if (phoneSearchValue === "Select-Phone") {
        modelSelect.length = 1;
        modelSelect.setAttribute("disabled", "true");
        alert("Select Phone is not a Correct Value");
        productContainer.innerHTML = 0 ;
        showingDom();
        return;
    }
    productContainer.innerHTML = "";
    modelSelect.length = 1;
    for (var models in mobileProducts[phoneSearchValue]) {
        for (var mobileProperties in mobileProducts[phoneSearchValue][models]) {
            // console.log(mobileProducts[phoneSearchValue][models].Name);
            // Product Card 
            let productCard = document.createElement("div");
            productCard.className = "product-card";
            productContainer.appendChild(productCard);
            // Product Content 
            let productContent = document.createElement("div");
            productContent.setAttribute("id", "product-content");
            productCard.appendChild(productContent);
            productContent.setAttribute("onmouseenter", "viewMoreShow(this)");
            productContent.setAttribute("onmouseover", "viewMoreShow(this)");
            productContent.setAttribute("onmouseleave", "viewMoreHide(this)");

            // View More Button 
            let viewMoreButton = document.createElement("p");
            viewMoreButton.className = "view-more";
            viewMoreButton.innerText = "Quic-View >>";
            viewMoreButton.setAttribute("onclick", "showSpecs(this)")
            productCard.appendChild(viewMoreButton);



            // Product COntent InnerHtml 
            productContent.innerHTML = `
        <div class = "productImageContainer" >
        <img src = "${mobileProducts[phoneSearchValue][models].profilePicture}"/>
        </div>
        <div class = "product-about">
        <p>${mobileProducts[phoneSearchValue][models].Name}</p>
        <span>Rs ${mobileProducts[phoneSearchValue][models].Prices}</span>
        </div>
        `
            // Pta Tag 
            if (mobileProducts[phoneSearchValue][models].Pta) {
                let ptaTag = document.createElement("div");
                ptaTag.className = "pta-tag-container";
                ptaTag.innerHTML = `
            <img src = "./assests/Media/PTA-approved.png" alt = "Pta-logo" />
            `
                productContent.appendChild(ptaTag);
            }
            // // Specs Container
            let availablility;
            if (mobileProducts[phoneSearchValue][models].avalaible === true) {
                availablility = "Available in Stocks";
            } else {
                availablility = "Out of Stock";
            }

            let specsContainer = document.createElement("div");
            specsContainer.setAttribute("id", "specs-container");
            specsContainer.innerHTML = `<div class= "cross-icon" onclick = "removeSpecs(this)">
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div class = "specs-content">
        <div class="specs-image">
        <img src = "${mobileProducts[phoneSearchValue][models].profilePicture}"/>
        </div>
        
        <div class = "specs-about">
        <h1>${mobileProducts[phoneSearchValue][models].Name}</h1>
        <span id= "availablility"> ${availablility}</span>
        <div class = "gen-info">
        <span>Color : ${mobileProducts[phoneSearchValue][models].color}</span>
        <span>Memory : ${mobileProducts[phoneSearchValue][models].ram} / ${mobileProducts[phoneSearchValue][models].rom}</span>
        <span>Display : ${mobileProducts[phoneSearchValue][models].display}</span>
        <span>Battery : ${mobileProducts[phoneSearchValue][models].batteryTime}</span>
        </div>
        <span id= "price-tag">Prices : ${mobileProducts[phoneSearchValue][models].Prices}</span>
        <div class = "specs-btn-container">
        <button id="cart-btn" onclick= "addingItemCart(this)"> Add to Cart </button>
        <button id="like-btn"> Like </button>
        </div>
        </div>
        
        </div>`
            productCard.appendChild(specsContainer);
            break;
        }

        // Phone Serach Options 
        let modelOptions = document.createElement("Option");
        modelOptions.value = models;
        modelOptions.innerText = mobileProducts[phoneSearchValue][models].Name;
        modelSelect.appendChild(modelOptions);
        modelSelect.removeAttribute("disabled");
        console.log(mobileProducts[phoneSearchValue][models]);
    }

    modelSelect.addEventListener("change", function () {
        let modelSearchValue = modelSelect.value;
        productContainer.innerHTML = "";
        for (var mobilePhonesModels in mobileProducts[phoneSearchValue][modelSearchValue]) {
            // Product Card 
            let productCard = document.createElement("div");
            productCard.className = "product-card";
            productContainer.appendChild(productCard);
            // Product Content 
            let productContent = document.createElement("div");
            productContent.setAttribute("id", "product-content");
            productCard.appendChild(productContent);
            productContent.setAttribute("onmouseenter", "viewMoreShow(this)");
            productContent.setAttribute("onmouseover", "viewMoreShow(this)");
            productContent.setAttribute("onmouseleave", "viewMoreHide(this)");

            // View More Button 
            let viewMoreButton = document.createElement("p");
            viewMoreButton.className = "view-more";
            viewMoreButton.innerText = "Quic-View >>";
            viewMoreButton.setAttribute("onclick", "showSpecs(this)")
            productCard.appendChild(viewMoreButton);



            // Product COntent InnerHtml 
            productContent.innerHTML = `
                   <div class = "productImageContainer" >
                   <img src = "${mobileProducts[phoneSearchValue][modelSearchValue].profilePicture}"/>
                   </div>
                   <div class = "product-about">
                   <p>${mobileProducts[phoneSearchValue][modelSearchValue].Name}</p>
                   <span>Rs ${mobileProducts[phoneSearchValue][modelSearchValue].Prices}</span>
                   </div>
                   `
            // Pta Tag 
            if (mobileProducts[phoneSearchValue][modelSearchValue].Pta) {
                let ptaTag = document.createElement("div");
                ptaTag.className = "pta-tag-container";
                ptaTag.innerHTML = `
                       <img src = "./assests/Media/PTA-approved.png" alt = "Pta-logo" />
                       `
                productContent.appendChild(ptaTag);
            }
            // // Specs Container
            let availablility;
            if (mobileProducts[phoneSearchValue][modelSearchValue].avalaible === true) {
                availablility = "Available in Stocks";
            } else {
                availablility = "Out of Stock";
            }

            let specsContainer = document.createElement("div");
            specsContainer.setAttribute("id", "specs-container");
            specsContainer.innerHTML = `<div class= "cross-icon" onclick = "removeSpecs(this)">
                   <i class="fa-solid fa-xmark"></i>
                   </div>
                   <div class = "specs-content">
                   <div class="specs-image">
                   <img src = "${mobileProducts[phoneSearchValue][modelSearchValue].profilePicture}"/>
                   </div>
                   
                   <div class = "specs-about">
                   <h1>${mobileProducts[phoneSearchValue][modelSearchValue].Name}</h1>
                   <span id= "availablility"> ${availablility}</span>
                   <div class = "gen-info">
                   <span>Color : ${mobileProducts[phoneSearchValue][modelSearchValue].color}</span>
                   <span>Memory : ${mobileProducts[phoneSearchValue][modelSearchValue].ram} / ${mobileProducts[phoneSearchValue][modelSearchValue].rom}</span>
                   <span>Display : ${mobileProducts[phoneSearchValue][modelSearchValue].display}</span>
                   <span>Battery : ${mobileProducts[phoneSearchValue][modelSearchValue].batteryTime}</span>
                   </div>
                   <span id= "price-tag">Prices : ${mobileProducts[phoneSearchValue][modelSearchValue].Prices}</span>
                   <div class = "specs-btn-container">
                   <button id="cart-btn" onclick= "addingItemCart(this)"> Add to Cart </button>
                   <button id="like-btn"> Like </button>
                   </div>
                   </div>
                   
                   </div>`
            productCard.appendChild(specsContainer);
            break;
        }
    }
    )
};