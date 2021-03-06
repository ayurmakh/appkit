buttons = $('.slider_button');
slides = $('.slide');
feature_slieds = $('.feature_slide');
feature_list = $('.feature_list li');

$('.slider_button').click(function() {
	changeSlide(this);	
});

function changeSlide(button) {	
	focusIndex = 0;
	for (var i = 0; i < buttons.length; i++) {
		$(buttons[i]).removeClass('slider_button_active');
		$(slides[i]).removeClass('show');
		if (button == buttons[i])
			focusIndex = i + 1;
	}
	$(button).addClass('slider_button_active');
	$('#slide' + focusIndex).addClass('show');	
}

setInterval(function() {

	current_id = $('.slider_button_active').attr('id');
	current_id_num = current_id[current_id.length - 1];
	if (current_id_num == 3)
		current_id_num = 1;
	else
		current_id_num++;

	for (var i = 0; i < buttons.length; i++) {
		$(buttons[i]).removeClass('slider_button_active');
		$(slides[i]).removeClass('show');
	}

	$('#slider_button' + current_id_num).addClass('slider_button_active');
	$('#slide' + current_id_num).addClass('show');

}, 10000);

$(window).scroll(function() {
	var bo = $(this).scrollTop();
	if (bo > 1)
		$('.main_header_wrapper').addClass('scrolled');
	else
		$('.main_header_wrapper').removeClass('scrolled');
});

$('.feature_list li').click(function() {
	changeFeatureSlid(this);	
});

function changeFeatureSlid(list) {	
	focusIndex = 0;
	for (var i = 0; i < feature_list.length; i++) {
		$(feature_list[i]).removeClass('feature_list_active');
		$(feature_slieds[i]).removeClass('feature_slide_active');
		if (list == feature_list[i])
			focusIndex = i + 1;
	}
	$(list).addClass('feature_list_active');
	$('#feature_slide' + focusIndex).addClass('feature_slide_active');	
}