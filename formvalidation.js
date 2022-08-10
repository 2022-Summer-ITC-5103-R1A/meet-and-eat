function validate() {  
    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;       
    var Specialequest = document.reg_form.gender;    
    var email = document.reg_form.email;    
    var mobile = document.reg_form.mobile;    
    var ReservationType= document.reg_form.course;    
    var ReservationDate= document.reg_form.course;    

    if (fname.value.length <= 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length <= 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }    
    if (email.value.length <= 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (mobile.value.length <= 0) {    
        alert("Mobile number is required");    
        mobile.focus();    
        return false;    
    }    
    if (ReservationType.value == "select reservation type") {    
        alert("Reservation type is required");    
        course.focus();    
        return false;    
    }    
    return false;    

}    



var pressedButton = document.getElementsByTagName("button")[0];
                            pressedButton.addEventListener("click", function (event) {
                               alert("You have successfully made your reservation")
                            }) 