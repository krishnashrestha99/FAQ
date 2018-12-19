// Accordian


	var action = "click";
	var speed = "500";


	$(document).ready(function(){
		$('li.q').on(action, function(){
			$(this).next()
				.slideToggle(speed)
					.siblings('li.a')
						.slideUp();
			// Get images for active question
			var img= $(this).children('img');
			// Remove the 'rotate' class for all images except active
			$('img').not(img).removeClass('rotate');
			// Toggle rotate class
			img.toggleClass('rotate');
		});
	});
