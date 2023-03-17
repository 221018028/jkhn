const form= document.getElementById('form');
const username = document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
form.addEventListener('submit',e => {
e.preventDefault();

ValidateInputs();

});


const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innertext = message;
    inputControl.classlist.add('error');
    inputControl.classlist.remove('success');
}
const setSuccess= element=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innertext ='';
    inputControl.classlist.add('success');
    inputControl.classlist.remove('error');
}
const isValidEmail = email =>{

    const re=/^(([^<>()[/]\\.,;:s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





const ValidateInputs=()=>{
const usernamevalue = username.Value.trim();
const emailevalue = email.Value.trim();
const passwordvalue = password.Valu.trim();
const password2value = password2.Value.trim();


if(usernamevalue === ''){
 
    setError(username,'Username is required');
}
else{
setSuccess(username);
}
if(emailValue === ''){

    setError(email,'Email is required');
}
else if(!isValidEmail(emalValue)){
    setError(email,'provide email address');
}
else{
    setSuccess(email);
}
if(passwordValue === ''){
    setError(password,'Password is required');
}
else if (passwordValue.length < 8){
    setError(password,'password must be at least 8 character.')
}
else {
    setSuccess(password);
}
if (password2value === ''){
    setError(password2,'pleas confirm your password');
}
else if (password2value !==passwordvalue){
    setError(password2,"passwords dosn't match");
}
else {
    setSuccess(password2);
}
};