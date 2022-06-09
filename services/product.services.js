const faker = require("faker");

const getConnection = require('../libs/postgres')

//aqui se debe terner el manejo transaccional

class ProducstService{

    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){
        const limit = 10;
        for(let index =0; index< limit; index++){
            //como es un array puedo usar el metodo push
            this.products.push({
                id:faker.datatype.uuid(),
                name:faker.commerce.productName(),
                price: parseInt(faker.commerce.price(),10),
                image: faker.image.imageUrl()
            });
        }
    }
    
    create(){

    }

    async find(){
        const client = await getConnection();
        const rta = await client.query('SELECT * FROM tasks');
        return rta.rows;
    }


    findOne(id){
        return this.products.find(item => item.id == id);
    }

    update(){

    }

    delete(){

    }

}

module.exports = ProducstService;