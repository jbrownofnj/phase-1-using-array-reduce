const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
function returnsArrayTotal(anArray){const totalBatteries = batteryBatches.reduce((prev,curr)=>prev+curr,0);return anArray.reduce((prev,curr)=>prev+curr,0);}
const totalBatteries = returnsArrayTotal(batteryBatches);

