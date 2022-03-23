

//current menu
var current_link = window.location.href.split('/');
$('.navbar a[href="/' + current_link[3] +'"]').parent('li').addClass('active');

//contacto
$('#formContacto').submit(function(e){
	e.preventDefault();
	$(this).find('button, input, textarea').attr('disabled', 'disabled');
	$(this).find('button').html('Enviando...');
	$(this).css('opacity', '.65');
	$.post('/sendform.php', {
		nombre: $('#input-nombre').val(),
		email: $('#input-email').val(),
		consulta: $('#input-consulta').val()
	}, function(){
		$('#formContacto').slideUp();
		$('#msgContacto').slideDown();
	});
});

$("#enviar_form").click(function(){alert("Su consulta ha sido enviada. Muchas gracias.")});

//vender
$('#formVender').submit(function(e){
	e.preventDefault();
	$(this).find('button, input, textarea').attr('disabled', 'disabled');
	$(this).find('button').html('Enviando...');
	$(this).css('opacity', '.65');
	$.post('/sendform-vender.php', {
		nombre: $('#input-nombre').val(),
		email: $('#input-email').val(),
		consulta: $('#input-telefono').val()
	}, function(){
		$('#formVender').slideUp();
		$('#msgVender').slideDown();
	});
});



new WOW().init();

$('body').on('hidden.bs.modal', '.modal', function () {
	$(this).removeData('bs.modal');
});

