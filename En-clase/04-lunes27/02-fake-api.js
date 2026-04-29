const API = "https://fakeapi.net//products?limit=20";

const response = await fetch(API);
const products = await response.json();

try {
    console.log(getProducts(products));
} catch (error) {
    console.error(error);
}

function getProducts(products) {
    let list = [];

    for (let i = 0; i < products.data.lenght; i++) {
        if (verify(products.data[i].rating.rate, products.data[i].rating.count)) {
            list.push(products.data[i]);
        }
    }

    return list;
}

function verifiy(rate, count) {
    if (rate >= 4.7 && count > 100) {
        return true;
    }
    return false;
}