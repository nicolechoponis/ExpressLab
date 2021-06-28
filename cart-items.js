const express = require("express");
const cart = express.Router();

const cartItems = [
    {id: 1, product: 'hiking boots', price: '129.99', quantity: 15}, 
    {id: 2, product: 'carabiner', price: '6.49', quantity: 100}, 
    {id: 3, product: 'telescoping pole', price: '129.99', quantity: 30}, 
    {id: 4, product: 'water bottle', price: '24.99', quantity: 30}, 
    {id: 5, product: 'multi-tool', price: '19.99', quantity: 30}, 
    {id: 6, product: 'first-aid kit', price: '24.99', quantity: 30}, 
    {id: 7, product: 'headlamp', price: '29.99', quantity: 30}, 
    {id: 8, product: 'rain jacket', price: '75.99', quantity: 30}, 
    {id: 9, product: 'short-sleeved t-shirt', price: '29.99', quantity: 30}, 
    {id: 10, product: 'merino wool socks', price: '14.99', quantity: 30}, 
    {id: 11, product: 'fancy hat', price: '19.99', quantity: 30}, 
    {id: 12, product: 'zip-off pants', price: '69.99', quantity: 30} 
]

let nextId = 13;

cart.get("/", (req, res) => {
  let price = parseFloat(req.query.maxPrice);
  let product =req.query.prefix;
  let pageSize = req.query.pageSize;
  let returnCart = cartItems;
    if(price){
        returnCart = cartItems.filter((item) => item.price <=price);
    }
    if(price){
        returnCart = returnCart.filter((item) => item.product.toLowerCase() == product.toLowerCase.startsWith(product.toLowerCase);
    }
    if(price){
        returnCart = returnCart.slice(0,pageSize);
    }
    res.status(200).json(cartItems);
});
 //   let maxPrice = cartItems;
 //   if (price <= 20)

 cart.get("/:id", (req, res) => {
    let id = parseFloat(req.params.id);
   let returnCart = cartItems.find((item) => item.id ===id); 
    if (returnCart){res.status(200).json(returnCart)} 
    else{res.status(404).send('ID Not Found')}
});

cart.post("/", (req, res) => {
    let response = {id : nextId, product: req.body.product, price: req.body.price, quantity: req.body.quantity,};
        cartItems.push(response);
        nextId++;
        //next id++ logic
        res.status(201).json(response);

});
//array goes here. as does all data fetching of array. variables cannot have dashes
 // accept PUT request at URI: /students
 
 cart.put("/:id", (req, res) => {
        let updatedItem = req.body;
        //find index using req.params.id, then use what is below. use ==
        let index = cartItems.findIndex((item) => item.id ==req.params.id); 
        cartItems[index] = {...cartItems[index], ...updatedItem};
        res.status(200).json(cartItems[index]);
    });

cart.delete("/:id", (req, res) => {
        //let removedItem = req.body;
        //find index using req.params.id, then use what is below. use ==
        let index = cartItems.findIndex((item) => item.id ==req.params.id); 
        cartItems.splice(index,1);
        res.status(204).send();
    });  
module.exports = cart;