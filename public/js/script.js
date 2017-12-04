$(document).ready(function(){
	$(".scroll-up").on("click",function(e){
		e.preventDefault();
		$(".parallax").animate({ scrollTop: 0 }, "slow");
  		return false;
	});

	var wow = new WOW({ scrollContainer: ".parallax"});
	wow.init();
});