
let email = document.querySelector('#email');
let warning = document.querySelectorAll('.warn')[0];
let submit_btn = document.querySelectorAll('.submit')[0];

submit_btn.addEventListener('click', function(e){
    if((email.value === "kushal1835.be22@chitkara.edu.in" && email.type==='email' )||( email.value === '7056059847'&& email.type==='text' )){
        window.close('sign_up.html');
        window.open("index.html")
    }
    else{
        warning.style.display = 'block';
        event.preventDefault();
    }
});

let phn_no = document.getElementsByClassName('phn')[0];
let lebel = document.getElementById('label');
let  example= document.getElementsByClassName('example');

phn_no.addEventListener('click' , function(e){
    label.innerHTML = label.innerHTML==='Email Address'?'Mobile Number':'Email Address';
    email.type =email.type==='text'?'email':'text';
    email.placeholder = email.placeholder==="98555*****"?"name@domain.com":"98555*****";
    phn_no.innerHTML = phn_no.innerHTML==="Use Email instead"?"Use phone number instead":"Use Email instead";
    example[1].innerHTML = example[1].innerHTML==='example@email.com'? '0123456789':'example@email.com';
    example[0].innerHTML = example[0].innerHTML==='email'?'mobile number':'email';
    email.value ='';

    event.preventDefault();
});
