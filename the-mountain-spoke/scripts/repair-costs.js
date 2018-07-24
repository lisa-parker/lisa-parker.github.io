let data = new XMLHttpRequest();
let dataURL =  "https://lisa-parker.github.io/the-mountain-spoke/repairdata.json";
data.open('GET', dataURL, true);
data.send();

//console.log(data.responseText);


data.onload = function() {
  
  let repairData = JSON.parse(data.responseText);
  
  //console.log(repairData);
    
  document.getElementById('flat').innerHTML = repairData.repairs.flatTire;
  
  document.getElementById('brake-r').innerHTML = repairData.repairs.brakeRepair;
  
  document.getElementById('brake-m').innerHTML = repairData.repairs.brakeMaintenance;
  
  document.getElementById('gear-r').innerHTML = repairData.repairs.gearRepair;
  
  document.getElementById('gear-m').innerHTML = repairData.repairs.gearMaintenance;
  
  document.getElementById('chain-r').innerHTML = repairData.repairs.chainRepair;
  
  document.getElementById('chain-m').innerHTML = repairData.repairs.chainMaintenance;
  
}
    
    
    
  