var first = document.getElementById('first');
var last = document.getElementById('last');
var mobilenumber = document.getElementById('mobilenumber');
var email = document.getElementById('email');
var zip = document.getElementById('zip');

function validation(){

    if(first.value == "" ){
        document.getElementById('firstname').innerHTML = " ** Please fill the firstName field"
        return false;
    }else {
        document.getElementById('firstname').innerHTML = ""
    }

    if((first.value.length <= 3) || (first.value.length > 15)){
        document.getElementById('firstname').innerHTML = " ** User length must be between 2 and 15"
        return false;    
    }else{
        document.getElementById('firstname').innerHTML = ""
    }

    if(!isNaN(first.value)){
        document.getElementById('firstname').innerHTML = " ** Only characters are allowed"
        return false;
    }else{
        document.getElementById('firstname').innerHTML = ""
    }




    if(last.value == "" ){
        document.getElementById('lastname').innerHTML = " ** Please fill the lastName field"
        return false;
    }else{
        document.getElementById('lastname').innerHTML = ""
    }

    if((last.value.length <= 3) || (last.value.length > 15)){
        document.getElementById('lastname').innerHTML = " ** User length must be between 2 and 15"
        return false;    
    }else{
        document.getElementById('lastname').innerHTML = ""
    }

    if(!isNaN(last.value)){
        document.getElementById('lastname').innerHTML = " ** Only characters are allowed"
        return false;
    }else{
        document.getElementById('lastname').innerHTML = ""
    }




    if(mobilenumber.value == "" ){
        document.getElementById('phone').innerHTML = " ** Please fill the mobile number field"
        return false;
    }else{
        document.getElementById('phone').innerHTML = ""
    }

    if(isNaN(mobilenumber.value)){
        document.getElementById('phone').innerHTML = " ** User must enter digits only not characters"
        return false;
    }else{
        document.getElementById('phone').innerHTML = ""
    }

    if(mobilenumber.value.length != 11){
        document.getElementById('phone').innerHTML = " ** Mobile number must be 11 digits only"
        return false;
    }else{
        document.getElementById('phone').innerHTML = ""
    }




    if(email.value == "" ){
        document.getElementById('emailid').innerHTML = " ** Please fill the email id field"
        return false;
    }else{
        document.getElementById('emailid').innerHTML = ""
    }

    if(email.value.indexOf('@') <= 0){
        document.getElementById('emailid').innerHTML = " ** @ Invalid position"
        return false;
    }else{
        document.getElementById('emailid').innerHTML = ""
    }

    if((email.value.charAt(email.value.length-4)!= '.') && (email.value.charAt(email.value.length-3)!='.') ){
        document.getElementById('emailid').innerHTML = " ** .dot Invalid position"
        return false;
    }else{
        document.getElementById('emailid').innerHTML = ""
    }




    if(zip.value == "" ){
        document.getElementById('zipcode').innerHTML = " ** Please fill the zipcode field"
        return false;
    }else{
        document.getElementById('zipcode').innerHTML = ""
    }

    if(isNaN(zip.value)){
        document.getElementById('zipcode').innerHTML = " ** User must enter digits only not characters"
        return false;
    }else{
        document.getElementById('zipcode').innerHTML = ""
    }

    if(zip.value.length != 5){
        document.getElementById('zipcode').innerHTML = " ** Zip code must be 5 digits only"
        return false;
    }else{
        document.getElementById('zipcode').innerHTML = ""
    }
}

var toggle = true
var bd = document.getElementById('body')

function datashow(){
    if(toggle == true){
        bd.innerHTML = "<div> <p> First Name : " + first.value + "</p> <p> Last Name : " + last.value + "</p> <p>Phone Number : " + mobilenumber.value + "</p> <p>Email : " + email.value + "</p> <p> Zip Code : " + zip.value + "</p></div>"
    }
}