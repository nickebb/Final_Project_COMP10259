function validateform (event){
    event.preventDefault();
    const firstnameInput = document.getElementById("first-name");
    const lastnameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    const namepattern = /^[A-Za-z]{5,}$/;
    const emailpattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const datepattern =/^\d{1,2}\/\d{1,2}\/\d{2}$/;
    const phonepattern =/^[\+]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.?[0-9]{4,6}$/;

    if (!namepattern.test(firstnameInput.value)){
        alert("Please enter at least 5 characters");
        return false;
    }
    if (!namepattern.test(lastnameInput.value)){
        alertalert("Please enter at least 5 characters");
        return false;
    }
    if (!datepattern.test(dateInput.value)){
        alert("please enter a valid date in dd/mm/yy");
        return false;
    }
    if (phoneInput.test(phoneInput.value)){
        alert("please enter a valid phone number.")
        return false;
    }
    if (messageInput.value.length <50){
        alert("Please enter at least 50 characters.")
    }
    document.getElementById("contactForm").submit();




}
Document.getElementById("contactform").addEventlistner("submit", validateform);