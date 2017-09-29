function subToKea() 
{
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var at = document.getElementById("email").value.indexOf('@');

    if (at == -1){
        alert("Not a valid e-mail!");
    }
    else 
    {
        alert(firstname + " " + lastname + " have succesfully subscribed to Kea's newsletter. You will receive Kea news to your email: " + email +".");
        // document.getElementById("demo").innerHTML = 
        // firstname + " " + lastname + " have succesfully subscribed to Kea's newsletter. You will receive Kea news to your email: " + email +".";
    }

} 

