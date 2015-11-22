$(document).ready(function(){
	$(".medRecieve-btn").bind('click',function(){
		$(".recieved").val(this.value);
		$('.recieved').bind('click',function(){
			var value = this.value;
			$('.patientCard[value='+value+']').hide();
		});
	});
	

});

