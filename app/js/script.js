$(document).ready(function(){
	
	$('.default-gallery-link').magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		}
	});
});

$(document).ready(function(){
	$('.single-item').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		draggable: true,
		infinite: true,
		arrows: true,
	});
});

