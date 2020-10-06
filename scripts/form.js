document.getElementById('myForm').addEventListener("submit", event => {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let weblogin = document.getElementById('weblogin').value;

    console.log('WE');

    let pwd = passwordGenerator();

    let answerMail = email ? `MAIL: ${email}` : '';
    let answerPwd = `PSW: ${pwd}`;
    let answerWeblogin = weblogin ? `MAIL: ${weblogin}` : '';

    let fullAnswer = [answerMail, answerPwd, answerWeblogin].join('\n');
    document.getElementById('answer').innerText = fullAnswer;
})

document.getElementById('myForm').addEventListener("reset", function (e) {
    document.getElementById('myForm').reset();
    document.getElementById('answer').innerText = '';
});

// TODO: add copy on click