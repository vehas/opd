var dclndr = $('.calendar').clndr({
   template :  $(".calendarTemplate").html(),
  //  daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    events: [{ date: '2015-11-11',period:'morning'},
              { date: '2015-11-13',period:'noon'},
              { date: '2015-11-17',period:'noon'},
              { date: '2015-11-17',period:'morning'},
              { date: '2015-11-23',period:'morning'},
              { date: '2015-11-24',period:'morning'},
              { date: '2015-11-25',period:'morning'},
              { date: '2015-11-25',period:'noon'},
              { date: '2015-11-26',period:'morning'},
            ],
     clickEvents:{
       click: function clickdate(target) {
         console.log("GG " ,target);
         dclndr.eventdate = target.date.add(1, 'seconds');
         dclndr.eventperiod = '';
         $('#calendarChoose').modal();
       }
     }
});
$( document ).ready(function() {
   $('.hideCalendarChoose').on('click',function hideCalendarChoose() {
       $('#calendarChoose').modal('hide');
   });
   $('.ChooseCalendar').on('click',function ChooseCalendar() {
    //  if(!bootbox.confirm('comfirm changed achedule'))
    //           return;
      console.log("date E",dclndr.eventperiod,dclndr.eventdate.toDate());
      var newEvent =  dclndr.eventdate.toISOString().slice(0,10);
      console.log("newEvent",newEvent);
     var samedate = false;

      dclndr.removeEvents(function(event){
        // var ret = false
          //  return true;
          //  console.log(event.date,newEvent,moment(event.date).diff(moment(newEvent),'days')===1);
          if(moment(event.date).diff(moment(newEvent),'days')===1){
              console.log(event);
             if(typeof event.period!= 'undefined'){
               console.log(event.period,dclndr.eventperiod,event.period == dclndr.eventperiod);
                 if(event.period == dclndr.eventperiod) {
                   console.log('delete please');
                   samedate = true;
                   return true;
                  //  console.log('no hope');
                }
             }
          }
          // console.log('ss');

          return false;
      });
      if(!samedate){
        console.log(samedate);
       dclndr.addEvents( [ { date: dclndr.eventdate.toISOString(),
                            period:dclndr.eventperiod} ]);
       }
      $('#calendarChoose').modal('hide');
   });
   $('.dcmorning').on('click',function choosePeriod() {
       dclndr.eventperiod = $(this).attr('data');
   });
   $('.dcnoon').on('click',function choosePeriod() {
       dclndr.eventperiod = $(this).attr('data');
       console.log(dclndr.eventperiod);
   });
});
