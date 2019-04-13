const products = require('../products.json');

const getProducts = (request, result)=>{
    if(request.query.price){
        const units = products.filter(val => val.price >= parseInt(request.query.price));
        return result.status(200).send(units);
    }
    result.status(200).send(products);
}

module.exports = getProducts;