const btn = document.querySelector('button')
const inputs = document.querySelector('form')

btn.addEventListener('onsubmit', () => {
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "fac2d613347d9e",
        Password: "9c7d4b62a575a1",
        To: "yuriy.yarytskyy@revature.net",
        From:inputs.elements["email"].value,
        Subject: inputs.elements["subject"].value,
        Body:inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["email"].value
    }).then(msg=>alert("Email sent successfully!"))
})