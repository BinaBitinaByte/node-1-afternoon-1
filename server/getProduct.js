const products = require('../products.json');

const getProduct = (request, result)=>{
    const unit = products.find(val => val.id === parseInt(request.params.id));
    if(!unit){
        return response.status(500).send ("item is not in the list");
    }
    response.status(200).send(unit);
}








module.exports = getProduct;