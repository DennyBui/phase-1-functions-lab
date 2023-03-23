function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42;
    } else {
        return 42 - street;
        }
}
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let distance
    if(start >= destination) {
        return (start - destination) * feetPerBlock;
    } else {
        return (destination - start) *  feetPerBlock;
    }
    return distance; 
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const freeRide = 400;
    let price
    if (distance <= freeRide) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return 2.56;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        price = "cannot travel that far"
        return price; 
    }
}