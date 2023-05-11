/* created by zelalem A for hilcoe students practice 2023 */

let form = document.getElementById("form");
let username = form.elements["username"];
let email = form.elements["email"];
let password = form.elements["password"];
let password2 = form.elements["password2"];
let img=document.querySelector('.title img')
img.style.display='none'
let gender = document.querySelectorAll("input[type=radio]");
let genderErrorBox=document.getElementById('radio-error');
let validValue= [true,true,true,true,true];


form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
  //Makes the error logo appear
  if(!validValue.includes(false)){
    img.style.display='none';
  }
});

//Error/Success Setting Section
function setError(element, message) {
  element.style.border='2px solid red';
  element.nextElementSibling.innerHTML=message;
  img.style.display='block'
}

function setSuccess(element) {
  element.style.border='3px solid #333';
  element.nextElementSibling.innerHTML='';
}

function validateForm() {
  validateUserName();
  validateEmail();
  validateGender();
  validatePassword();
  validatePassword2();
}

//Validation Section

function validateUserName(){
  if(username.value==''){
    setError(username,'username must not be empty.')
    validValue[0]=false;
  }else{
    setSuccess(username);
    validValue[0]=true;
  }
}

function validateEmail(){
  if(email.value==''){
    setError(email,'email must not be empty.')
    validValue[1]=false;
  }else{
    setSuccess(email);
    validValue[1]=true;
  }
}

function validateGender(){
  if(gender[0].checked==false && gender[1].checked==false){
    genderErrorBox.innerHTML='please select your gender.';
    validValue[2]=false;
  }else{
    genderErrorBox.innerHTML='';
    validValue[2]=true;
  }
}

function validatePassword(){
  if(password.value==''){
    setError(password,'password must not be empty.');
    validValue[3]=false;
  }else if(password.value!=password2.value){
    setError(password,'password did\'t match.')
    validValue[3]=false;
  }else{
    setSuccess(password);
    validValue[3]=true;
  }
}

function validatePassword2(){
  if(password2.value==''){
    setError(password2,'password must not be empty.');
    validValue[4]=false;
  }else if(password.value!=password2.value){
    setError(password2,'password did\'t match.')
    validValue[4]=false;
  }else{
    setSuccess(password2);
    validValue[4]=true;
  }
}

