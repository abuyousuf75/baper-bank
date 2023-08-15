const emailValue = document.getElementById('email-field');
const passwordValue = document.getElementById('password-field');
const loginBtn = document.getElementById('btn-login');

loginBtn.addEventListener('click',function(){
    const email = emailValue.value;
    const password = passwordValue.value;
    if(email === 'yousuf@gmail.com' && password === 'yousuf123'){
        window.location.href = 'deposite.html';
    }else{
       return alert ('Invalid User')
    }
})
