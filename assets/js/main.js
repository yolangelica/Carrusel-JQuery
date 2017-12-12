$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides imagenes
	var imgPos = 1;

	// Agregando paginacion circulos --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides imagenes
	$('.slider li:first').show(); // Mostramos el primer slide imagen
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos color al primer item circulo de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);//al dar click  a circulo
	$('.right span').click(nextSlider);//al dar click a la flecha derecha
	$('.left span').click(prevSlider);// al dar click a la flecha izquierda


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES 

	function pagination(){//funcion al click en circulo cambia img
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides (img)
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos la img seleccionada

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});