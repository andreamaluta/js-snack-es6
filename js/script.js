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

// creo l'array delle squadre 
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

// creo due funzioni random, una per i punti e una per i falli
const randomPoint = () =>{
    return Math.floor(Math.random()*100)+1;
}

const randomFoul = () =>{
    return Math.floor(Math.random()*50)+1;
}

// assegno le due funzioni random ai valori delle chiavi punti e falli
for(let i = 0; i<squad.length; i++){
    squad[i].point = randomPoint();
    squad[i].foul = randomFoul();
}

// creo un array vuoto che conterrà gli oggetti con solo nome e falli 
const finalSquad = [];

// ciclo l'array iniziale
for(let i = 0; i<squad.length; i++){
    // creo un nuovo oggetto e salvo dentro il nome della squadra e i falli
    // prendendoli direttamente dal primo array
    const newSquad = {
        newName: squad[i].squadName,
        newFoul: squad[i].foul,
    }
    // inserisco gli oggetti dentro l'array vuoto che ho creato in precedenza
    finalSquad.push(newSquad);
}

// stampo in console l'array finale
console.log(finalSquad);