
let warn_msg = document.getElementsByClassName('warning');
function show_warning(){
    warn_msg[0].style.display = 'flex';
};


let pass_show = document.getElementsByClassName('pass_show')[0];
let pass = document.getElementById('pass');

function type_change(){
    if(pass_show.classList.contains('bi-eye-fill')){
        pass_show.classList.add('bi-eye-slash-fill');
        pass_show.classList.remove('bi-eye-fill');
        pass.type = 'password';
    }
    else{
        pass_show.classList.remove('bi-eye-slash-fill');
        pass_show.classList.add('bi-eye-fill');
        pass.type = 'text';
    }
};

let email = document.getElementById('email');
let detail = document.getElementById('wrong_detail');
function form_submit(){
    if(email.value==''){
        warn_msg[1].style.display = 'flex';
        event.preventDefault();
    }
    else{
        event.preventDefault();
        detail.style.display ='block';
    }
    if(email.value == 'kushal1835.be22@chitkara.edu.in' && pass.value == '123456'){
        window.close('login.html');
        window.open("index.html");
    }
};

