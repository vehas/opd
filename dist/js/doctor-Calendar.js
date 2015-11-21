$('.calendar').clndr({
   template :  $(".calendarTemplate").html(),
  //  daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    events: [{ date: '2015-11-11', title: 'Birthday' ,period:'morning'},
              { date: '2015-11-13', title: 'Birthday' ,period:'noon'},
              { date: '2015-11-17', title: 'Birthday' ,period:'noon'},
              { date: '2015-11-17', title: 'Birthday' ,period:'morning'},

            ]
});
