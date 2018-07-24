let data = new XMLHttpRequest();
let dataURL =  "https://lisa-parker.github.io/the-mountain-spoke/data/chart.json";
data.open('GET', dataURL, true);
data.send();

//console.log(data.responseText);


data.onload = function() {
  
  let priceData = JSON.parse(data.responseText);
  
    for (i = 0; i < priceData.repairs.length; i++) {
      //console.log(priceData);
    
      
      document.getElementById(priceData.repairs[i].name + "-name").innerHTML = priceData.repairs[i].name;
      
      document.getElementById(priceData.repairs[i].name + "-repairs").innerHTML = priceData.repairs[i].repair;
      
      document.getElementById(priceData.repairs[i].name + "-maintain").innerHTML = priceData.repairs[i].maintain;
    }
  
  }