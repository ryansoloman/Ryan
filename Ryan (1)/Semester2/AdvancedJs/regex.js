const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/
    const emailField = document.getElementById("email-field")

    if (!emailRegex.test(emailField)) {
        
    }
})