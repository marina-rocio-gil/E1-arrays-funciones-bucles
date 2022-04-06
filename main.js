let ingredientesPizza = ['harina','agua','sal','aceite','levadura','muzzarella','tomate','ajo','aceitunas','oregano','jamon','provolone'];


function separarIngredientes(ingredientes) {
    let ingredientesPares = [];
    let ingredientesImpares = [];

    for(ingrediente of ingredientes) {
        if (ingrediente.length % 2 === 0) {
            ingredientesPares.push(ingrediente);
        } else {
        ingredientesImpares.push(ingrediente);
    }
}

    console.log(
    `Los ingredientes pares son: ${ingredientesPares}
    Los ingredientes impares son: ${ingredientesImpares}`)

}

separarIngredientes(ingredientesPizza);