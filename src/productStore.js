
const productsArray = [
    {
        id: "price_1MN0iFJ3SajjLN9d75b7LPTk",
        title: "Coffe",
        price: 4.99
    },
    {
        id: "price_1MN0jZJ3SajjLN9dxMSDUVqV",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MN0kOJ3SajjLN9dWbnCDPpm",
        title: "Camera",
        price: 38.99
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);
    console.log(productData);
    if (productData == undefined) {
        console.log("Product data does not exist for id " + id);
        return undefined;
    }

    return productData;

}




export { productsArray, getProductData };