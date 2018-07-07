$(function(){
		// All jQuery code goes here
      
     // $('.dropdownMenu > li').hover( function() {
        //mouseover
      //  $(this).children("ul").slideDown(200);
        
     // }, function() {
        //mouse out
     //   $(this).children("ul").slideUp(200);
     // });
      
      $('.dropdownMenu > li').hover( function() {
        $(this). children("ul").slideToggle(200);
      })

	})