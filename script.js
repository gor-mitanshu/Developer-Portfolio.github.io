document.querySelector('.cross').style.display = "none";
document.querySelector('.hamberg').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 350)
    }
})




// form
function validateForm() {
    var mail = document.getElementById('email').value;
    var user = document.getElementById('user').value;
    var mobile = document.getElementById('mobile').value;

    // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regey = /^[a-zA-Z ]{2,30}$/;
    var regen = /^[789]\d{9}$/;
    var regm = /^[1-9]\d{9}$/;


    if (!regey.test(user)) {
        document.getElementById("username-error").style.display = "block";
        document.getElementById('username-error').innerHTML = " *Please Enter the valid Name";
    }
    else {
        document.getElementById("username-error").style.display = "none";
    }
    if (!regex.test(mail)) {
        document.getElementById("email-error").style.display = "block";
        document.getElementById('email-error').innerHTML = " *Please Enter the valid Email";
    }
    else {
        document.getElementById("email-error").style.display = "none";
    }
    if (!regm.test(mobile)) {
        document.getElementById("numbererr").style.display = "block";
        document.getElementById("numbererr").innerHTML = " *Please Enter the Valid Mobile Number "
    } else {
        document.getElementById("numbererr").style.display = "none";
    }
    if (!regey.test(user) || !regex.test(mail) || !regen.test(number)) {
        return false;
    }

    return true;
}