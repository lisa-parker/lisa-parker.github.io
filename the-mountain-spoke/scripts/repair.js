var data = new XMLHttpRequest();
var dataURL =  "https://byui-cit230.github.io/weather/data/towndata.json";
data.open('GET', dataURL, true);
data.send();


  data.onload = function() {
  
    var repairData = JSON.parse(data.responseText);
  
    for (i = 0; i < repairData.repairs.length; i++) {
      //console.log(townData);
    
      if ( repairData.repairs[i].name == "Tires" || repairData.repairs[i].name == "Brakes" || repairData.repairs[i].name == "Seat" || repairData.repairs[i].name == "Gears" || repairData.repairs[i].name == "Spokes" || repairData.repairs[i].name == "Chain" || repairData.repairs[i].name == "Cable" || repairData.repairs[i].name == "Tune-up" )
      {
      
      
      document.getElementById(repairData.repairs[i].name + "-name").innerHTML = repairData.repairs[i].name;
      document.getElementById(repairData.repairs[i].name + "-repair").innerHTML = repairData.repairs[i].repair;
      document.getElementById(repairData.repairs[i].name + "-maintain").innerHTML = repairData.repairs[i].maintain;
    }
  
  }
  }