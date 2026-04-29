const API = 'https://fakeapi.net/products';

async function getProducts() {
    
    try {
        const response = await fetch(API);
        const data = await response.json();
        let total = 0;

        for (let i = 0; i < data.data.length; i++) {
            let nombre = data.data[i].title;
            let stock = data.data[i].stock;
            let precio = data.data[i].price;
            total = stock * precio;
            console.log(`El producto ${nombre} tiene un stock de ${stock} y un precio de ${precio}. El total del stock  * precio es de ${total}`);
        }
    } catch (error) {
        console.error('Error al conectarse a la FakeAPI');
    }

}

getProducts();