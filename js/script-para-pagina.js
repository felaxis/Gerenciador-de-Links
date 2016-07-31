$(document).ready(function(){
		$('.solucoes-da-empresa > .box > ul > li').hide();
		$('.solucoes-da-empresa h3').click(function() {
			$('> ul > li', $(this).closest(".box")).toggle('slow, 1000');
		});
 });