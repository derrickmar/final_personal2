(function($, window, document) {
    // The $ is now locally scoped 
    $("document").ready(function() {
    	tips.onReady($('.question-box'));
      tips.onReady($('.tip-box'));
    });

    var tips = {
    	onReady: function(box) {
	    	box.on("click", function() {
    			$(this).find('.box-description').toggleClass('hidden');
    			var arrow = $(this).find('.expanding-arrow');
    			console.log(arrow);
    			if (arrow.hasClass('glyphicon-chevron-down')) {
    				arrow.removeClass('glyphicon-chevron-down');
    				arrow.addClass('glyphicon-chevron-up');
    			} else {
    				arrow.removeClass('glyphicon-chevron-up');
    				arrow.addClass('glyphicon-chevron-down');
    			}
    		});
    	}
    }

}(window.jQuery, window, document)); // The global jQuery object is passed as a parameter


  // var list = $("ul#longlist");
  // list.on("mouseenter", "li", function(){
  //   $(this).text("Click me!");
  // });

  // list.on("click", "li", function() {
  //   $(this).text("Why did you click me?!");
  // });