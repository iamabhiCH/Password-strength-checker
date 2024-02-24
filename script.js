const inputField = document.querySelector('#password');
const outputField = document.querySelector('#output');

inputField.addEventListener('input', function(){
    console.log(inputField.value);
    let password = inputField.value;
    if(password.length < 8){
        outputField.innerHTML = 'Password is too short';
        outputField.style.color = 'red';
    }
    else{
        console.log("is lowercase", password.search(/[a-z]/));
        if(password.search(/[a-z]/) == -1){
            outputField.innerHTML = 'Password is missing a lowercase letter';
            outputField.style.color = 'red';
        }
        else if(password.search(/[A-Z]/) == -1){
            outputField.innerHTML = 'Password is missing a uppercase letter';
            outputField.style.color = 'red';
        }
        else if(password.search(/[0-9]/) == -1){
            outputField.innerHTML = 'Password is missing a numeric letter';
            outputField.style.color = 'red';
        }
        else if(password.search(/[!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\|\[\]\\\;\'\,\.]/) == -1){
            outputField.innerHTML = 'Password is missing a special character';
            outputField.style.color = 'red';
        }
        else{
            outputField.innerHTML = 'Password is strong';
            outputField.style.color = 'green';
        }
    }
});