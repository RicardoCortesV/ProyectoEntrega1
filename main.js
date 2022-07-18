function agregarAlCarrito(producto, stockDelProducto) {
    const tenemosStock = validarStock(stockDelProducto);
    if (tenemosStock === 'SÌ hay stock') {
        console.log('Agregaste ' + stockDelProducto + ' unidades de ' + producto);
    } else {
        console.log('lo siento, no tenemos stock suficiente de ' + producto);
    }

}

function validarStock(stockDelProducto) {
    if (stockDelProducto > 10) {
        return 'NO hay stock';
    } else {
        return 'SÌ hay stock';
    }
}

stock = ["Alegrías, Pan, Dulces"]

for (let i = 0; i < stock.length; i++) {
    alert("Éstos artículos tienen poco stock: " + stock[i]);
}








