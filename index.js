/*

Practica iterar por medio de un array de objetos/diccionarios.
Imagina que se te entrega un array de objetos. Por ejemplo,

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
¿Cómo harías print/log de la edad de John?
¿Cómo harías print/log del nombre del primer objeto?
¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
¿Cómo harías para imprimir el nombre de los mayores de edad?
Michael - 37
John - 30
David - 12

*/

var users =  [
    {name: "Michael", age:37},
    {name: "John", age:30},
    {name: "David", age:12}
];

//imprime todo el arreglo
//console.log(users);

//imprime todo el arreglo
//console.log(users[3]);

//¿Cómo harías print/log de la edad de John?
console.log(users[1].age);

//¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0].name);

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
for(var i=0; i<users.length; i++){
    console.log(`nombre: ${users[i].name} - edad: ${users[i].age}`); 
}

//¿Cómo harías para imprimir el nombre de los mayores de edad?
for(var i=0; i<users.length; i++){
    if(users[i].age >=18){
        console.log(`nombre: ${users[i].name}`); 
    }
    
}






                                          


