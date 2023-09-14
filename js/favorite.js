let productDom = document.querySelector('.products');
let noProductsDom =document.querySelector('.noProducts');


function drawFavoritesProductsUi (allProducts=[]) {
    if(JSON.parse(localStorage.getItem('productsFavorite')).length === 0){
        noProductsDom.innerHTML = 'There are no Products here !!'
    }
    let products = JSON.parse(localStorage.getItem('productsFavorite'))|| allProducts;

    let productsUI =products.map( (item)=>{
        return ` 
            <div class="product-item">
                <img src="${item.imageUrl}" alt="image" class="product-item-image">
                <div class="product-item-desc">
                    <h2>${item.title}</h2>
                    <p>Lorem ipsum dolor,  consectetur adipisicing.</p>
                    <span>size: ${item.size}</span><br>
                    <span>Quantity: ${item.qty}</span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From Favorite</button>
                </div>  
            </div>
        `;
    } );
    productDom.innerHTML = productsUI.join("");
}
drawFavoritesProductsUi();
function removeItemFromCart(id){
    let productsFavorite = localStorage.getItem('productsFavorite');
    if(productsFavorite){
        let items = JSON.parse(productsFavorite);
        let filterItem =items.filter((item) => item.id !== id);
        localStorage.setItem('productsFavorite',JSON.stringify(filterItem));
        drawFavoritesProductsUi(filterItem)

    }
}