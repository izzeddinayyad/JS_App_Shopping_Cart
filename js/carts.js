let productDom = document.querySelector('.products');
let noProductsDom =document.querySelector('.noProducts');


function drawCartProductsUi (allProducts=[]) {
    if(JSON.parse(localStorage.getItem('productsInCart')).length === 0){
        noProductsDom.innerHTML = 'There are no Products here !!'
    }
    let products = JSON.parse(localStorage.getItem('productsInCart'))|| allProducts;

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
                    <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" id="addCart">Remove From Cart</button>
                </div>  
            </div>
        `;
    } );
    productDom.innerHTML = productsUI.join("");
}
drawCartProductsUi();
function removeItemFromCart(id){
    let productInCart = localStorage.getItem('productsInCart');
    if(productInCart){
        let items = JSON.parse(productInCart);
        let filterItem =items.filter((item) => item.id !== id);
        localStorage.setItem('productsInCart',JSON.stringify(filterItem));
        drawCartProductsUi(filterItem)

    }
}