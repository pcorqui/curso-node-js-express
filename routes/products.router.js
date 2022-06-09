const express = require('express');
const ProducstService = require('../services/product.services');


//la funcion router lleva las rutas que seran expuestas por la api --analogo a java seria el controler
const router = express.Router();
const servicio = new ProducstService();


router.get('/',(req,res)=>{
    
    const products = servicio.find();

    res.json(products);
});

router.get('/filter',(req,res) => {
    res.send('Yo soy un filter');
});

router.get('/:id',(req,res) => {
    const {id} = req.params;
    const product = servicio.findOne(id);
    res.json(product);
})

//route se hace para definir la ruta
//si le pongo products la ruta seria products/products
router.get('/products/:id',(req, res) => {
    //spread with req 
    const {id} = req.params; 
    res.json({
        id,
        name:'Product',
        price:2000
    });
});

module.exports = router;