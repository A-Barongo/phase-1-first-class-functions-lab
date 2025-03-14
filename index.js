const returnFirstTwoDrivers= (function (names=[]){return names.slice(0,2) })

const returnLastTwoDrivers=((names=[])=>names.slice(-2))

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(mult){
    return (fare=>fare*mult)}

const fareDoubler=createFareMultiplier(2)

const fareTripler=createFareMultiplier(3)

function selectDifferentDrivers(names=[],selector){return selector(names);}

