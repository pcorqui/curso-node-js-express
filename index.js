
//modulos importados express es el nombre del default module importado.
const express = require('express');
//routesApi es el nombre de la funcion de routes/index pero podrias asignarle cualquier nombre
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

//esta seria mi router api de productos
routerApi(app);

//definir una ruta o endpoint tambien se conoce
app.get('/',(req,res) => {
    res.send('hola mi server en express');
});

//los :category son para indicar un dato que viene en la url
app.get('/categories/:categoryId/products/:productId',(req,res) =>{
    //esto es una desestruturacion
    const {categoryId,productId} = req.params;

    //asi se envia un json
    res.json({
        categoria:categoryId,
        producto: productId
    })
})

app.listen(port, ()=>{
    console.log('aplicacion corriendo en ' + port);
})