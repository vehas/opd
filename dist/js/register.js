$(document).ready(function runondoc() {
   $('#register-submit').on('click',function regisform(e) {
      var out ={patientName :$('#name').val(),
                surname :$('#surname').val(),
                birthday :$('#dateofbirth').val(),
                telephoneNum :$('#tel').val(),
                citizenID :$('#citizenid').val(),
                email :$('#email').val(),
                password :$('#registerPassword').val(),
                confirmPwd :$('#confirmPassword').val(),
                };
        console.log(out);
        if (
          registerFormCheck(out)
        ){
        console.log(out);
        delete out.confirmPwd
        $.post('/register',out,function done(data) {
          console.log(data);
          // for production
          bootbox.alert('register success',function redirect() {
            window.location.replace("/patient");
          });
        });

      }
   });
});
function registerFormCheck(form) {
    if(!(form.password === form.confirmPwd) ){
      bootbox.alert('confirm password not match');
      delete form.confirmPwd
      return false;
    }
    if(form.birthday === '0'){
      bootbox.alert('pick birthday in datapicker');
      delete form.confirmPwd
      return false;
    }
    if(form.birthday === '' ){
      bootbox.alert('pick birthday in datapicker');
      delete form.confirmPwd
      return false;
    }
    if(!validateEmail(form.email)){
      bootbox.alert('please correct email ');
      // delete form.confirmPwd
      return false;
    }
    if(isNaN(form.telephoneNum)){
      bootbox.alert('please correct telephone number ');
      // delete form.confirmPwd
      return false;
    }
    console.log(validateEmail(form.email));
    return true
}
function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// function validatetelephone(telephone)
// {
//     var re = /\^d+/;
//     return re.test(telephone);
// }
