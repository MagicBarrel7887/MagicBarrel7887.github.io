
console.log('jQuery Loading Local JSON File')



function sendEmail(){
    var email;
    var message;
    var name;

    var form = document.querySelector("form");
    // console.log(form.elements[1].value);
    // // → password
    // console.log(form.elements.Message.value);
    // console.log(form.elements.Email.value);
    // // → password
    // console.log(form.elements.Message.form == form);
  // → true
    message = form.elements.Message.value + "   ";

    name = form.elements.Name.value;
    
    console.log(email);
  window.open('mailto:o8mfrk48k@mozmail.com?subject=' + name +'&body=' + message);
}

$(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
