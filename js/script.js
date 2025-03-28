// snak 1: trovare la bici con il peso minore

// creo l'array che contiene gli oggetti
const bike = [
    // tutti gli oggetti che rappresentano le bici
    {
        bikeName: 'Trek Domane AL 3',
        weight: 8.1,
    },
    {
        bikeName: 'Cannondale CAAD Optimo Tiagra',
        weight: 7.9,
    },
    {
        bikeName: 'Giant Contend SL 2',
        weight: 7.4,
    },
    {
        bikeName: 'Scott Speedster 20',
        weight: 7.7,
    },
    {
        bikeName: 'Decathlon Triban 520',
        weight: 8.3,
    }
]

// dichiaro la variabilw che contiene il primo peso
let minWeight = bike[0].weight;
// dichiaro la variabile che conterrà l'oggetto che ha il peso minore
let minWeightBike;

// ciclo per scorrere l'array
for(let i = 0; i<bike.length; i++){
    // controllo se il peso dell'oggetto è più piccolo del peso contenuto nella variabile minWeight
    if(bike[i].weight<minWeight){
        // se più piccolo assegno a minWeight un nuovo valore
        minWeight = bike[i].weight;
        // assegno l'oggetto che ha peso minore parziale
        minWeightBike = bike[i];
    }
}

console.log(minWeightBike);

console.log(bike);

console.log('-------------------------------------------------------------');

// Snak 2

const squad = [
    {
        squadName: 'Juventus',
        point: 0,
        foul: 0
    },
    {
        squadName: 'Inter',
        point: 0,
        foul: 0
    },
    {
        squadName: 'Milan',
        point: 0,
        foul: 0
    },
    {
        squadName: 'Atalanta',
        point: 0,
        foul: 0
    }
]

console.log(squad);

const randomPoint = () =>{
    return Math.floor(Math.random()*100)+1;
}

const randomFault = () =>{
    return Math.floor(Math.random()*50)+1;
}