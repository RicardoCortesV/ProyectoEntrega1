function mayorEdad() {
    alert('Para comprar, debes ser mayor de edad');
    let edad = prompt("edad?")
    if (edad >= 18) {
        alert('Adelante, puedes comprar');
    } else {
        alert('NO puedes comprar');
    }
    if (edad >= 18) {
        alert('Escribe lo que requieres');
        let stock = prompt('cantidad')
        if (stock >= 10) {
            alert('Lo sentimos, no hay suficiente stock')
        } else {
            let compras = ["alegrías, galletas, Pan"];
            for (let i = 0; i < compras.length; i++) {
                alert("Esta es la lista de los artìculos: " + compras[i]);
            }

        }


    }
}



