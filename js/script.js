const bike = [
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

let minWeight = bike[0].weight;
let minWeightBike;

for(let i = 0; i<bike.length; i++){
    if(bike[i].weight<minWeight){
        minWeight = bike[i].weight;
        minWeightBike = bike[i];
    }
}

console.log(minWeightBike);

console.log(bike);