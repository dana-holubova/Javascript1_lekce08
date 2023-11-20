/*const message = 'Vítej ve světě slasti';

const checkAge = (age, message) => {
    // Z hlediska oboru platnosti jsou „age“ a „message“ jakoby definovány až zde, uvnitř bloku funkce
    if (age < 18) {
        return message;
    } else {
        const message = 'Vítej mezi dospěláky';
        return message;
    }
};

document.body.innerHTML += checkAge(15, 'Utři si sopel') + '<br>';
document.body.innerHTML += checkAge(21, 'Oh yeah!') + '<br>';*/

/*const name = 'Mississippi';

if (name.length > 5) {
  const name = 'Missi';
  document.body.innerHTML += `<p>${name}</p>`;
}

document.body.innerHTML += `<p>${name}</p>`;*/

/*const name = 'Franta';

const greet = (name) => {
    const name = 'Pepa';
    document.body.innerHTML += `<p>${name}</p>`;
};

greet('Jožin');*/

const age = 25;

if (age > 21) {
    const price = 100;
} else if (age > 15) {
    const price = 50;
} else {
    const price = 0;
}

document.body.innerHTML += `<p>${price}</p>`;