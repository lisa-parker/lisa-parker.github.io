$(function(){
		// jQuery Code goes here
      $('#alcoveLogo').css('opacity', 0.4);
      $('.servicesBtn').css('color', '#FFF');
      
      var toggleStyle = function() {
          
      var inputFields = $('input[type="text"]');
          
        if(inputFields.css('background-color') === 'rgb(255, 0, 0)' ){
          //set background color to white
          inputFields.css('background-color', 'rgb(255, 255, 255)');
            
          } 
        else {
          //set background color to red
          inputFields.css('background-color', 'rgb(255, 0, 0)');
        } 
      }
      
        
      $('#ReqAQuoteBtn').click( toggleStyle );
  
      $('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>");
  
      $("<li><strong>This is also great!!</strong></li>").prependTo(".coreValues");
      
      var nameVal = $('input[name="nameVal"]');
      
      function FillEmpty() {
        if(nameVal.val() == ''){
          nameVal.val('John Doe');
        }
      }
      
      
      $('#ReqAQuoteBtn').click(FillEmpty);  

})
	