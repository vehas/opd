$(document).ready(function(){
    $('#myModal').on('hidden.bs.modal', function () {
    // do something…
    $('#weight').val("");
    $('#height').val("");
    $('#temp').val("");
    $('#pulse').val("");
    $('#blood').val("");
});
    $('.patientName').on('click',function showModal(e) {
        var pa = { patient: $(this).attr('data')};
        var html = window.nurseModalTemplate(pa);
        $('.modalTemp').html(html);
        $('#myModal').modal();
    })
 	console.log('doctor');
});
