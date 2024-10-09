// Ejercicio 1
function ParImpar(numero){
    if (numero % 2 === 0) {
        console.log(`${numero} es par.`);} 
        else {
        console.log(`${numero} es impar.`);}
}

ParImpar(5)
ParImpar(10)

// Ejercicio 2

function MayorMenor (num1, num2){
if(num1 > num2){
    console.log(`${num1} es mayor que ${num2}`);}

else if(num1 < num2){
    console.log(`${num1} es menor que ${num2}`);}

else{
    console.log(`${num1} es igual a ${num2}`);}
}
    
MayorMenor(6, 3)
MayorMenor(6, 10)
MayorMenor(6, 6)

//Ejercicio 3

    function Multiplo(numero) {
    if(numero % 5 === 0 ){
        console.log(`${numero} es multiplo de 5`);
    }
    else{console.log(`${numero} no es multiplo de 5`);
    }   
    }

    Multiplo(21)


    //Ejercicio 4

    function Hasta10(numero) {
        for (let i = 0; i<= numero; i++){
            console.log(i);
            
        }
    }

    Hasta10(10)


    //Ejercicio 5


    function Palabra(palabra, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            console.log(palabra);
        }
    }
    
    Palabra("Messi", 10)

    //Ejercicio 6

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    numeros.forEach ( (numero) => {
        console.log(`${numero}`);
        
    });
    

    //Ejercicio  7


    const ExcluirEl5 = numeros.filter(numero => numero !== 5);
console.log(ExcluirEl5);


//Ejercicio 8 l

const MultiplicarPorElAnterior = (numeros) => {
    numeros.forEach((numero, index) => {
        if (index > 0){console.log(numero * numeros[index - 1] );
        }
    });
};

MultiplicarPorElAnterior([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


