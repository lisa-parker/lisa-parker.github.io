
  
var data = new XMLHttpRequest();
var dataURL =  "";
data.open('GET', dataURL, true);
data.send();


  data.onload = function() {
  
    var priceData = JSON.parse(data.responseText);
  
    for (i = 0; i < priceData.towns.length; i++) {
      console.log(priceData);
    
      
      document.getElementById(priceData.repairs[i].name + "-name").innerHTML = priceData.repairs[i].name;
      
      document.getElementById(priceData.repairs[i].name + "-repairs").innerHTML = priceData.repairs[i].repair;
      
      document.getElementById(priceData.repairs[i].name + "-maintain").innerHTML = priceData.repairs[i].maintain;
      
    }
  
  }