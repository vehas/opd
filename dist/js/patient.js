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
     appo.datail = out;
     $.post('/appointment/detail',appo,function done(dates) {
            console.log(dates);
     });
     console.log(out);
   });
   $('#listotherdate button.list-group-item').on('click',function chooseD() {
      appo.date = $(this).html();
      console.log($(this).html());
   });
   $('#chooseDate').on('click',function () {
           console.log(appo);
           $.post('/appointment/choosedate',appo,function done(data) {
                  console.log(data);
           });
   });
});
