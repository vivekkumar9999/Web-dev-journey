let validate = () => {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("cpassError").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    if(name == ""){
        document.getElementById("nameError").innerHTML =
        "Name is required";
    }

    else if(email == ""){
        document.getElementById("emailError").innerHTML =
        "Email is required";
    }

    else if(!email.includes("@gmail.com")){
        document.getElementById("emailError").innerHTML =
        "Enter valid Gmail";
    }

    else if(password.length < 8){
        document.getElementById("passError").innerHTML =
        "Password must be at least 8 characters";
    }

    else if(!password.match(/[0-9]/)){
        document.getElementById("passError").innerHTML =
        "Password must contain a number";
    }

    else if(password != cpassword){
        document.getElementById("cpassError").innerHTML =
        "Passwords do not match";
    }

    else{
        document.getElementById("success").innerHTML =
        "Registration Successful";
    }
}