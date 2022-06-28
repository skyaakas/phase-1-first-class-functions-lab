// Code your solution in this file!
function returnFirstTwoDrivers(scuberArray){
    return scuberArray.slice(0,2);
}
function returnLastTwoDrivers(scuberArray){
    return scuberArray.slice(2,4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
    return function fareQuintupler(fare){
        return fare * a;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, scuberArray){
    return drivers.scuberArray;
}
    

