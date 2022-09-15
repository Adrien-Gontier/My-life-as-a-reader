let nameValue = "";
// let emailValue = document.getElementById('email');
// let messageValue = document.getElementById('message');
// let valueName = nameValue.value;
// let valueMail = emailValue.value;
// let valueMessage = messageValue.value;



function message() {

    // let formulaireName = document.forms['formul'].elements['name'].value;

    // let formulaireMail = document.forms['formul'].elements['email'].value;

    // let formulaireMessage = document.forms['formul'].elements['message'].value;



    // console.log(formulaireName);
    // console.log(formulaireMail);
    // console.log(formulaireMessage);

    // it's working !!!!!!

    nameValue = document.getElementById('name').value;

    console.log(nameValue);

    // console.log(valueName);
    // console.log(valueMail);
    // console.log(valueMessage);

}


// will be continu

// JSON file




let submitMessage = document.getElementById('submit');
submitMessage?.addEventListener('click', message);