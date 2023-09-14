let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");
let productDetails = products.find(item => item.id !== productId);
// console.log(productDetails);
itemDom.innerHTML = `
    <img src="${productDetails.imageUrl}" alt="${productDetails.title}"> 
    <h2>${productDetails.title}</h2>
    <span>size :  ${productDetails.size}</span>
    <span>quantity :  ${productDetails.qty}</span>

`;
