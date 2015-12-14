var appointmentCancel = {};
$(document).ready(function onload() {
   var  appo = {}

   $('#ChooseTime').on('click',function chooseTime() {
    //  var out = {};
     var out = {
        Symtom : $('#Symtom').val(),
        Cause: $('Cause').val(),
        Doctor : $('#Docname').val(),

     };
     if($('#sel1').val() === 'แพทย์เฉพาะทางอื่นๆ'){
       out.department = $('#depart').val();

     } else {
       out.department = $('#sel1').val();
     }
     appo.detail = out;
     $.post('/appointment/detail',appo,function done(times) {
            times =JSON.parse(times);
            // console.log(1},{2}]);
            console.log("times : ",times);
            var t = {};
            for(var i  in times){
                t[i] = times[i].date;
            }
            console.log(t);
            times = t;
            var html = window.patientchoosedateModalTemplate({times: t});
            console.log("html : ",html);
            $('#patientchoosedateModal').html(html);
            $('#ChooseTime').modal('hide');
            $('#PostponeModal').modal();
            $('#listotherdate button.list-group-item').on('click',function chooseD() {
               appo.date = $(this).html();
               console.log($(this).html());
            });
            $('#chooseDate').on('click',function () {
                     console.log('choose date');
                     console.log(appo);
                     $.post('/appointment/choosedate',appo,function done(data) {
                            console.log(data);
                     });
              });
            $('.cancel').on('click',function(){
              console.log('cc ');
              appointmentCancel = $(this).attr('data');
              console.log(appointmentCancel);
            });

     });
     console.log(out);
   });
   $('#listotherdate button.list-group-item').on('click',function chooseD() {
      appo.date = $(this).html();
      console.log($(this).html());
   });
  $('#chooseDate').on('click',function () {
           console.log('choose date');
           console.log(appo);
           $.post('/appointment/choosedate',appo,function done(data) {
                  console.log(data);
                  $('#PostponeModal').modal('hide');
           });

           $('#PostponeModal').modal('hide');
   });
});
$('.cancel').on('click',function(){
  // console.log('cc ');
  appointmentCancel = $(this).attr('data');
  console.log(appointmentCancel);
})
$('#cancelAppointment').on('click',function(){
  $.post('/appointment/cancel',{appointmentCancel: appointmentCancel},
          function done(data){
            console.log(data);
          });
})
// $('#postpone').on('click',function () {
//   $('#PostponeModal').modal();
// })
