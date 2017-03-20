$(function(){

$ ('.landing .arrow a').click(function(e){
	e.preventDefault();	
	var href=$(this).attr('href'), speed=1200;

 $('html, body').animate({ scrollTop: $(href).offset().top }, speed);
});



 $('.navbar-toggle').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).addClass('collapse');
})

 
})
