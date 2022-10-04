let readlineSync: any = require('readline-sync');
let nroDeseado = readlineSync.question('Escriba el numero que desea verificar si es mayor o no a 18: ');
    if (nroDeseado > 20) {
    console.log('El número es mayor a 18: ' + nroDeseado);
    }
     else if (nroDeseado === 0) {
    console.log('Ingrese un número mayor a 0'  + nroDeseado);
    }
    else {
    console.log('El número es menor a 18: ' + nroDeseado);
    };