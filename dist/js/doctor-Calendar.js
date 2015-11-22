$('.calendar').clndr({
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
         $('#calendarChoose').modal();
       }
     }
});
$( document ).ready(function() {
   $('.hideCalendarChoose').on('click',function hideCalendarChoose() {
       $('#calendarChoose').modal('hide');
   })
});
