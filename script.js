function validateForm() {
    // Flag to track if the form is valid [cite: 40]
    let isValid = true;

    // --- Reset previous error messages and success message
    const errorSpans = document.getElementsByClassName("error");
    for (let i = 0; i < errorSpans.length; i++) {
        errorSpans[i].innerHTML = "";
    }
    document.getElementById("successMsg").innerHTML = "";

   // Full Name: Not empty; at least 2 characters
    const fname = document.getElementById("fname").value.trim(); // Using trim() as required [cite: 66]
    if (fname.length < 2) {
        document.getElementById("nameErr").innerHTML = "Full name must be at least 2 characters.";
        isValid = false;
    }

    // Birthdate: 13 years or older
    const bdayValue = document.getElementById("bday").value;
    if (bdayValue === "") {
        document.getElementById("dateErr").innerHTML = "Birthdate cannot be empty.";
        isValid = false;
    } else {
        const bday = new Date(bdayValue);
        const today = new Date();
        let age = today.getFullYear() - bday.getFullYear();
        // Adjust age if birthday hasn't occurred yet this year
        const monthDiff = today.getMonth() - bday.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < bday.getDate())) {
            age--;
        }
        if (age < 13) {
            document.getElementById("dateErr").innerHTML = "You must be at least 13 years old.";
            isValid = false;
        }
    }

    // Sex: Radio button loop
    const sexOptions = document.getElementsByName("sex");
    let sexChecked = false;
    for (let i = 0; i < sexOptions.length; i++) {
        if (sexOptions[i].checked) {
            sexChecked = true;
        }
    }
    if (!sexChecked) {
        document.getElementById("sexErr").innerHTML = "Please select your sex.";
        isValid = false;
    }

    // Email: Must contain @ and a dot after it
    const email = document.getElementById("mail").value;
    if (email === "" || !email.includes("@") || email.lastIndexOf(".") < email.indexOf("@")) {
        document.getElementById("mailErr").innerHTML = "Email must contain an '@' and a '.' after it.";
        isValid = false;
    }

    // Username: 8–20 chars; letters and digits only
    const uname = document.getElementById("uname").value;
    const lettersAndNumbers = /^[a-zA-Z0-9]+$/;
    if (uname.length < 8 || uname.length > 20) {
        document.getElementById("userErr").innerHTML = "Username must be 8–20 characters.";
        isValid = false;
    } else if (!lettersAndNumbers.test(uname)) {
        document.getElementById("userErr").innerHTML = "Username may only contain letters and numbers.";
        isValid = false;
    }

    // Password: Complexity rules (Separate checks for specific messages)
    const password = document.getElementById("psc").value;
    if (password.length < 10) {
        document.getElementById("passErr").innerHTML = "Password must be at least 10 characters.";
        isValid = false;
    } else if (!/[A-Z]/.test(password)) {
        document.getElementById("passErr").innerHTML = "Password must include at least one uppercase letter.";
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        document.getElementById("passErr").innerHTML = "Password must include at least one lowercase letter.";
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        document.getElementById("passErr").innerHTML = "Password must include at least one digit.";
        isValid = false;
    }

    // Confirm Password: Must match exactly [cite: 22, 84]
    const confirm = document.getElementById("confirm").value;
    if (confirm !== password) {
        document.getElementById("confirmErr").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    // Dropdown: Check if default is selected
    const interest = document.getElementById("interest").value;
    if (interest === "") {
        document.getElementById("selectErr").innerHTML = "Please choose a nature-related topic.";
        isValid = false;
    }

    // Checkbox Group Loop: At least one checked
    const flowers = document.getElementsByName("flowers");
    let flowerChecked = false;
    for (let i = 0; i < flowers.length; i++) {
        if (flowers[i].checked) {
            flowerChecked = true;
        }
    }
    if (!flowerChecked) {
        document.getElementById("checkErr").innerHTML = "Please select at least one flower.";
        isValid = false;
    }

    // Third Question (Scale 1-10):
    const scale = document.getElementById("scale").value;
    if (scale === "" || scale < 1 || scale > 10) {
        document.getElementById("numErr").innerHTML = "Please enter a number between 1 and 10.";
        isValid = false;
    }

    // --- Final Submission Logic---
    if (isValid) {
        document.getElementById("successMsg").innerHTML = "Registration successful! Welcome the Busters!";
        return false; 
    } else {
        return false; 
    }
}
