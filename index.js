// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    if (street > 42) {
        return street - 42;
    }
    else if (street < 42) {
        return 42 - street;
    }
}


function distanceFromHqInFeet (street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet (start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else if (destination > start) {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    const dis = distanceTravelledInFeet(start, destination);
    if (dis < 400) {
        return 0;
    }
    else if (dis > 400 && dis <= 2000) {
        return (dis - 400) * 0.02;
    }
    else if (dis > 2000 && dis <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}

