const API = 'https://fakeapi.net/products';

async function getProducts() {
    
    try {
        const response = await fetch(API);
        const data = await response.json();
        let total = 0;

        for (let i = 0; i < data.data.length; i++) {
            total += data.data[i].price;
        }

        console.log(total);
    } catch (error) {
        console.error('Error al conectarse a la FakeAPI');
    }

}

getProducts();