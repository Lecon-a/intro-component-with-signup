// using the id to get my button element
const claimButton = document.getElementById("button");
// get all the fields in here
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const revealPassword = document.querySelector(".reveal");

const form_error_text = document.querySelectorAll(".form_error_text");
const error_circles = document.querySelectorAll(".error_circle");

// using class to get my button element

// add event listeners to the claim button
claimButton.addEventListener("click", (e) => {
    // prevent auto refresh
    e.preventDefault();
    // get all the value entered by the user
    const fName = firstName.value;
    const lName = lastName.value;
    const eMail = email.value;
    const pwd = password.value;

    // check if all the fields are empty
    if (fName === "") {
        firstName.classList.add("error")
        form_error_text[0].classList.remove("hide")
        error_circles[0].classList.remove("hide")
    } else {
        firstName.classList.remove("error")
        form_error_text[0].classList.add("hide")
        error_circles[0].classList.add("hide")
    }

    if (lName === "") {
        lastName.classList.add("error")
        form_error_text[1].classList.remove("hide")
        error_circles[1].classList.remove("hide")
    } else {
        lastName.classList.remove("error")
        form_error_text[1].classList.add("hide")
        error_circles[1].classList.add("hide")
    }

    if (!validateEmail(eMail) || eMail === "") {
        email.classList.add("error")
        form_error_text[2].classList.remove("hide")
        error_circles[2].classList.remove("hide")
    } else {
        email.classList.remove("error")
        form_error_text[2].classList.add("hide")
        error_circles[2].classList.add("hide")
    }

    if (pwd === "") {
        password.classList.add("error")
        form_error_text[3].classList.remove("hide")
        error_circles[3].classList.remove("hide")
        revealPassword.classList.add("hide")
    } else {
        password.classList.remove("error")
        form_error_text[3].classList.add("hide")
        error_circles[3].classList.add("hide")
    }

    // check if all the fields are empty or not
    // if (!validateEmail(emailVal) || eMail === "" || pwd === "") {
    //     firstName.classList.add("error")
    //     lastName.classList.add("error")
    //     email.classList.add("error")
    //     password.classList.add("error")

    //     const size = form_error_text.length;

    //     for(let i = 0; i < size; i++) {
    //         form_error_text[i].classList.remove("hide")
    //         error_circles[i].classList.remove("hide")
    //     }

    //     form_error_text.map( errorContainer => errorContainer.classList.remove("hide"))
    // } else {
    //     alert("Stored inside the database")
    // }
})

//Validate email
function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


revealPassword.addEventListener('click', () => {
    password.type = "text"
})
  