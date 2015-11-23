$(document).ready(function onload() {
  $('#login-submit').on('click',function login() {
    var login = {
      citizenID : $('#citizenID').val(),
      password : $('#password').val(),
    };
    console.log(login);
    $.post('/login',login,function done(data) {
      if(data === 'incorrect'){
        bootbox.alert('citizen ID or password incorrect');
        }
      else{
          window.location.replace(data);
      }});
  });
});
