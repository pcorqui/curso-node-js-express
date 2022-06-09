//este archivo es principalmente para definir las routes


const productsRouter = require('./products.router')
//const categoriesRouter = require('./categories.router')
//const usersRouter = require('./user.router')



//esta es la simple declaracion de una funcion esta funcion es invocada en index.js
//routerApi recibe como parametro la funcion express, la cual hace uso de la funcion use que asu vez recibe como parametro la funcion
//productsRouter que es la funcion Router que define las rutas de la API, y desestrutura su request y su response.
function routerApi(app){

    //aqui se define el endpoint
    app.use('/api/products',productsRouter);
    //app.use('/api/categories',categoriesRouter);
    //app.use('/api/users',usersRouter);
}

//para exportar la funcion
module.exports = routerApi;