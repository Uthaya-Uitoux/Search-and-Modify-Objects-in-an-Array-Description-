const product_details=[{Item:"Tables",price:1500,Quantity:3},
{Item:"Chair",price:500,Quantity:200},
{Item:"Desk",price:2500,Quantity:50},
{Item:"Scale",price:150,Quantity:10},
{Item:"Paper",price:1500,Quantity:2}];
let detailedproducts = product_details.map(Items => {
    return `Item: ${Items.Item}, Price: ${Items.price}, Quantity: ${Items.Quantity}`;
}).join("");
let input_elements=document.querySelector("#element")
input_elements.textContent=detailedproducts;

let input_data=document.querySelector("#inputData")
let input_number=document.querySelector("#quantityNumber")


function findProduct(){
    let itemName = input_data.value.toLowerCase();
    let foundProduct = product_details.find(product => product.Item.toLowerCase() === itemName);
    if (foundProduct) {
        console.log(foundProduct);
        let result = document.querySelector("#final_result");
        result.textContent = `Item: ${foundProduct.Item}, Price: ${foundProduct.price}, Quantity: ${foundProduct.Quantity}`;
    } else {
        console.log("Product not found");
        let result = document.querySelector("#final_result");
        result.textContent = "Product not found";
    }  
}
function quantityUpdation(){
    let itemName = input_data.value.toLowerCase();
    let quantity= Number(document.getElementById("quantityNumber").value)
    console.log(quantity)
    let foundProduct = product_details.find(product => product.Item.toLowerCase() === itemName);
    if (foundProduct) {
        foundProduct.Quantity += quantity;
        let result = document.querySelector("#final_result");
        result.textContent = `Updated Quantity for ${foundProduct.Item}: ${foundProduct.Quantity}`;
    } else {
        console.log("Product not found");
        let result = document.querySelector("#final_result");
        result.textContent = "Product not found";
    }
}
function totalAmount(){
    const totalValue = product_details.reduce((total, product) => {
        return total + (product.price * product.Quantity);
    },0);
    let result = document.querySelector("#final_result");
    result.textContent = "The Total value of all the items is $" + totalValue;
}