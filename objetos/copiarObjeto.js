const obj1 = {
    parametroObj1: 5,
    funcObj1: function(){
        console.log("mostrar");
    }
}

// Metodo 1

for(let key in obj1){
    obj2[key] = obj1[key];
}

// Metodo 2

const obj3 = Object.assign({}, obj1);

const obj3 = Object.assign( // Añadir propioedades
    {
        parametroObj3: "valor diferente",
    },
    obj1,
);


// Metodo 3

const obj4 = { ...obj1 }

const obj4 = // Añadir propiedades
{
    propiedadOjb3: 65,
    ...obj1,
}