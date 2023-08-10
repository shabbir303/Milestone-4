// fixed: wood required
// char: 3cft
// table: 10cft
// bed: 15cft

// vary:quantity

function woodCalculator( tableQuantity, chairQuantity, bedQuantity){
    const perTableWood = 10;
    const perChairWood = 3;
    const perBedWood = 15;
    const totalTableWood = perTableWood * tableQuantity;
    const totalChaiWood = perChairWood * chairQuantity;
    const totalBedWood = perBedWood * bedQuantity;
    const totalWood = totalTableWood + totalChaiWood + totalBedWood;
    return totalWood;
}
const totalwood = woodCalculator(2, 2, 5);
console.log(totalwood);