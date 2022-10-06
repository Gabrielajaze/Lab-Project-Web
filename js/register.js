const form = document.getElementById('form');
const username = document.getElementById('username');
const gender = document.getElementById('gender');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const payment = document.getElementById('payment');
const agreement = document.getElementById('agreement');
const btn = document.getElementById('submit');


form.addEventListener('submit', (e) => {

    checkInput();

    console.log(formValid());
    if(formValid() == true){
        form.submit();
     }
     
    else {
         e.preventDefault();
    }
    

});

function formValid(){
    const formCntrl = form.querySelectorAll('.form-control');
    const agreementValue = agreement.value.trim();
    let result = true;
    formCntrl.forEach((container) =>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

    if(!agreement.checked){
        alert('You must agree to the terms first.');
       result = false;
    }
    else{
        console.log("Checkbox selected: ", agreement.checked);

    }

    return result;
}

function checkInput(){
    const usernameValue = username.value.trim();
    const genderValue = gender.value.trim();
    const addressValue = address.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const paymentValue = payment.value.trim();

    if(usernameValue == ''){
        setErrorFor(username, 'Name cannot be blank');
        
        
    }
    else if(usernameValue.length < 2){
        setErrorFor(username, 'Must be 2 character or more');
    }

    else{
        setSuccesFor(username);
       
    }

    if(genderValue == "-1"){
        setErrorFor(gender, 'Choose your gender');
        
      
    }
    else{
        setSuccesFor(gender);
    }

    if(addressValue == ''){
        setErrorFor(address, 'Address cannot be blank');
       
    }
    else{
        setSuccesFor(address);
    }

    
    if(phoneValue == ''){
        setErrorFor(phone, 'Address cannot be blank');
        
        
    }
    else{
        setSuccesFor(phone);
    }

    if(emailValue == ''){
        setErrorFor(email, 'Email cannot be blank');
        
    
    }
    else if (!isEmail(emailValue)){
        setErrorFor(email, 'Not a valid email');
        
       
    }
    else{
        setSuccesFor(email);
    }

    if(paymentValue == '-1'){
        setErrorFor(payment, 'Choose your payment');
       
        
    }
    else{
        setSuccesFor(payment);
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    if(formControl.classList.contains('success')){
        formControl.classList.remove('success');
    }

    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
    if(formControl.classList.contains('error')){
        formControl.classList.remove('error');
    }
    formControl.classList.add('success');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}