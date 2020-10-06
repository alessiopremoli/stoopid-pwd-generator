const _ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const _SYMBOLS = '!£$%&?/@#';
const _PWD_LENGHT = 10;

const lowercaseLetters = _ALPHABET.split('');
const uppercaseLetters = _ALPHABET.toUpperCase().split('');
const numbers = (new Array(10)).fill(0).map((v, i) => v = i.toString());
const symbols = _SYMBOLS.split('');

const generator = lowercaseLetters.concat(uppercaseLetters, numbers, symbols);

function passwordGenerator() {
    let pwd = '';

    for(let i = 0; i < _PWD_LENGHT; i++) {
        pwd = pwd.concat(generator[Math.floor(Math.random() * generator.length)]);
    }

    console.log(pwd);
    return pwd;
}