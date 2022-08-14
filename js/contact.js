const nameValue = document.getElementById('name');
const emailValue = document.getElementById('email');
const messageValue = document.getElementById('message');

const valueName = nameValue.value;
const valueMail = emailValue.value;
const valueMessage = messageValue.value;



function message() {

    console.log(valueName);
    console.log(valueMail);
    console.log(valueMessage);

  

}


// will be continu




let submitMessage = document.getElementById('submit');
submitMessage?.addEventListener('click', message);