$(document).ready(function(){
	$('.program-block').hide();
	$('.program-block').first().show();

	$('.result-program-list a').click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$('.result-program-list li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('.program-block').hide();
		$(target).show();
	})
})
