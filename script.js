function validateForm() {
    // Flag to track if the form is valid
    let isValid = true;

    // Reset previous error messages 
    const errorSpans = document.getElementsByClassName("error");
    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerHTML = "";
    }

    // 1. Full Name: Not empty; at least 2 chars [cite: 13]
    const fname = document.getElementById("fname").value;
    if (fname.trim().length < 2) {
        document.getElementById("nameErr").innerHTML = "Name must be at least 2 characters.";
        isValid = false;
    }

    // 2. Birthday: 13 or older [cite: 13]
    const bdayValue = document.getElementById("bday").value;
    if (!bdayValue) {
        document.getElementById("dateErr").innerHTML = "Please enter your birthday.";
        isValid = false;
    } else {
        const bday = new Date(bdayValue);
        const today = new Date();
        const age = today.getFullYear() - bday.getFullYear();
        if (age < 13) {
            document.getElementById("dateErr").innerHTML = "You must be 13 or older.";
            isValid = false;
        }
    }

    // 3. Sex: Radio button loop 
    const sexOptions = document.getElementsByName("sex");
    let sexChecked = false;
    for (let i = 0; i < sexOptions.length; i++) {
        if (sexOptions[i].checked) sexChecked = true;
    }
    if (!sexChecked) {
        document.getElementById("sexErr").innerHTML = "Please select an option.";
        isValid = false;
    }

    // 4. Email: Must contain @ and a dot [cite: 13]
    const email = document.getElementById("mail").value;
    if (email.indexOf("@") < 1 || email.lastIndexOf(".") < email.indexOf("@") + 2) {
        document.getElementById("mailErr").innerHTML = "Enter a valid email address.";
        isValid = false;
    }

    // 5. Username: 8-20 characters; letters and digits only [cite: 13]
    const uname = document.getElementById("uname").value;
    const userRegex = /^[a-zA-Z0-9]{8,20}$/;
    if (!userRegex.test(uname)) {
        document.getElementById("userErr").innerHTML = "8-20 alphanumeric characters only.";
        isValid = false;
    }

    // 6. Password: Complexity rules [cite: 13]
    const pass = document.getElementById("psc").value;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById("passErr").innerHTML = "Min 10 chars, 1 uppercase, 1 lowercase, 1 digit.";
        isValid = false;
    }

    // 7. Confirm Password: Must match [cite: 13]
    const confirm = document.getElementById("confirm").value;
    if (confirm !== pass || confirm === "") {
        document.getElementById("confirmErr").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    // 8. Select Dropdown: Not default [cite: 17]
    const interest = document.getElementById("interest").value;
    if (interest === "") {
        document.getElementById("selectErr").innerHTML = "Please select an interest.";
        isValid = false;
    }

    // 9. Checkbox Group Loop: At least one checked [cite: 18]
    const tools = document.getElementsByName("tools");
    let toolChecked = false;
    for (let i = 0; i < tools.length; i++) {
        if (tools[i].checked) toolChecked = true;
    }
    if (!toolChecked) {
        document.getElementById("checkErr").innerHTML = "Select at least one tool.";
        isValid = false;
    }

    // Final check
    if (isValid) {
        document.getElementById("successMsg").innerHTML = "Success! Form is ready to submit.";
        return true; // Form submits
    } else {
        return false; // Form does not submit [cite: 5]
    }
}