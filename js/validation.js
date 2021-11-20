function myValidator() {
    // if false do not submit form
    let firstNameError = document.getElementById('firstNameError');
    let a = 1;
    console.log('The button is working!!');
    let firstName = document.getElementById('firstName').value;
    if(firstName.length < 2) {
        // alert('Name must be at least 2 chars...');
        let a = 2;
        firstNameError.innerText = "Please provide at least 2 chars.";
        return false;
    }
    firstNameError.innerText = "";
    if (this | that)
    // do lots more validation here
    return false;
}

function testNoSubmit() {
    return false;
}

function testFunction() {
    let returnValue = true;
    let firstName = document.getElementById('firstName').value;
    console.log('First name ' + firstName);
    if(firstName.length < 2) {
        // alert("Must be greater than 2");
        document.getElementById('firstNameError').innerText = "First name must be greater than 2";
        returnValue = false;
    }
    // do more validation
    return returnValue;
}