/* Add your JavaScript to this file */

/*`Thank you! Your email address {$email} has been added to our mailing list` (in .message div)
"Please enter a valid email address." (if none entered; same place)*/
document.addEventListener('DOMContentLoaded', function() {

    var message = document.getElementsByClassName("message");
    var b = document.querySelector("form > button");
   
   

    b.onclick = function(cl) {
        addmail = document.querySelector("input").value;
        if(addmail.includes("@") && addmail.includes(".")) {
            message[0].innerHTML = "Thank you! Your email address " + addmail + " has been added to our mailing list!";
            event.preventDefault();
        } else {
            message[0].innerHTML = "Please enter a valid email address.";
            cl.preventDefault();
        }
    };
})