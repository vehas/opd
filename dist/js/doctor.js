$(document).ready(function(){
	$("#myBtn").click(function(){
		$("#myModal").modal();
	});
	$('body').on('click','button.add.btn-info',function addmidicine(e) {
		$(this).html('remove')
				 .toggleClass('btn-info')
				 .toggleClass('btn-danger');

		var html = '<div class="form-group" id="medicineList" ><div class="form-group"><div class="midicine well"> <div class="row"> <div class="col-md-3"> <input placeholder="name" class="name form-control"/> </div><div class="col-md-9"> <input placeholder="usage" class="usage form-control"/> </div></div><div class="row"> <div class="col-md-3"> <input placeholder="quatity" class="quatity form-control"/> </div><div class="col-md-3"> <button class="add btn btn-info">add</button> </div></div></div></div></div>';
		$('#medicineList').append(html);
    console.log('added');
    });
    $('body').on('click','button.add.btn-danger',function addmidicine(e) {
		$("#medicineList").empty();
		var html = '<div class="form-group" id="medicineList" ><div class="form-group"><div class="midicine well"> <div class="row"> <div class="col-md-3"> <input placeholder="name" class="name form-control"/> </div><div class="col-md-9"> <input placeholder="usage" class="usage form-control"/> </div></div><div class="row"> <div class="col-md-3"> <input placeholder="quatity" class="quatity form-control"/> </div><div class="col-md-3"> <button class="add btn btn-info">add</button> </div></div></div></div></div>';
		$('#medicineList').html($('#medicineList').html()+html);
    console.log('removed');
    });
    $('#myModal').on('hidden.bs.modal', function () {
    // do something…
    $('#disease_id').val("");
    $('#symptom_pat').val("");
  $("#medicineList").empty();
		var html = '<div class="form-group" id="medicineList" ><div class="form-group"><div class="midicine well"> <div class="row"> <div class="col-md-3"> <input placeholder="name" class="name form-control"/> </div><div class="col-md-9"> <input placeholder="usage" class="usage form-control"/> </div></div><div class="row"> <div class="col-md-3"> <input placeholder="quatity" class="quatity form-control"/> </div><div class="col-md-3"> <button class="add btn btn-info">add</button> </div></div></div></div></div>';
		$('#medicineList').html($('#medicineList').html()+html);
});

 	console.log('doctor');
});
