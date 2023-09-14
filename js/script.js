// define product
let productDom = document.querySelector(".products");
let cartProductMenu = document.querySelector(".carts-products");
let cartProductDivDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let products = JSON.parse(localStorage.getItem("products"));
//Open Cart Menu
shoppingCartIcon.addEventListener("click", openCartMenu);
//Display Products
let drawProductsUi;
(drawProductsUi =function (products=[]) {
  let productsUI = products.map((item) => {
    return ` 
            <div class="product-item">
                <img src="${item.imageUrl}" alt="image" class="product-item-image">
                <div class="product-item-desc">
                    <a onclick="saveItemData()">${item.title}</a>
                    <p>Lorem ipsum dolor,  consectetur adipisicing.</p>
                    <span>size: ${item.size}</span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="addTiCart(${item.id})" id="addCart">Add To Cart</button>
                    <i class="favorite fa-regular fa-heart" style = "color :${item.liked==true? "red" : ""}" onClick="addToFavorite(${item.id})"></i>
                </div>  
            </div>
        `;
  });
  productDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem('products')));



// Check if there any Items in localStorage
let addedItem = localStorage.getItem("productsInCart")
  ? JSON.parse(localStorage.getItem("productsInCart"))
  : [];
if(addedItem){
    addedItem.map(item => {
        cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`
    })
    badgeDom.style.display = "block";
    badgeDom.innerHTML += addedItem.length
};



//add to cart
let allItems = [];
function addTiCart(id) {
  let user = localStorage.getItem("username");
  if (user) {
    let chosenItem = products.find((item) => item.id === id);
    let Items = addedItem.find(i => i.id === chosenItem.id);
    // console.log("items",Items);
    if(Items){
      chosenItem.qty += 1;
    }else{
      allItems.push(chosenItem);
    }
    cartProductDivDom.innerHTML = "";
    allItems.forEach(item =>{
      cartProductDivDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;

    })


    // cartProductDivDom.innerHTML += `<p>${chosenItem.title}</p>`;
    addedItem = [...addedItem, chosenItem];
    let uniqueProducts = getUniqueArr(addedItem , "id");
    localStorage.setItem("productsInCart", JSON.stringify(uniqueProducts));
    let cartProductItems = document.querySelectorAll(".carts-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueArr(arr , filterType){
  let unique = arr.map((item)=>item[filterType])
  .map((item , i , final)=>final.indexOf(item) === i && i)
  .filter((item)=>arr[item])
  .map((item)=>arr[item]);
  return unique;
}
  



//open cart menu
function openCartMenu() {
  if (cartProductDivDom.innerHTML != "") {
    if (cartProductMenu.style.display == "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";
    }
  }
}
function saveItemData(id){
  localStorage.setItem("productId",id);
  window.location = 'cartDetails.html';
}
let input = document.getElementById('search');
input.addEventListener("keyup",function(e){
    search(e.target.value,JSON.parse(localStorage.getItem("products")));
  if(e.target.value.trim() === ""){
    drawProductsUi(JSON.parse(localStorage.getItem("products"))); 
  }
});
function search(title,myArray){
  let arr = myArray.filter(item => item.title.indexOf(title) !== -1);
  drawProductsUi(arr)
}

//add to favorite
let favoriteItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
function addToFavorite(id) {
  let user = localStorage.getItem("username");
  if (user) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.liked =true;
    favoriteItems =     addedItem = [...addedItem, chosenItem];
    let uniqueProducts = getUniqueArr(favoriteItems , "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map(item =>{
      if(item.id === chosenItem.id){
        item.liked = true;
      }
    } )
    localStorage.setItem("products",JSON.stringify(products));

    drawProductsUi(products);
  } else {
    window.location = "login.html";
  }
}