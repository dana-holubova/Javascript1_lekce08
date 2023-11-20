//const heslo = prompt("Zadej heslo")
const hesloDatabaze = "admin"

/*if (heslo === hesloDatabaze) {
    const zprava = "Vitej"
    document.body.innerHTML += zprava
} else {
    zprava = "Přístup odepřen"
    document.body.inert += zprava
}

console.log(zprava)*/

/*const overeniHesla = (heslo) => {
    const uzivatelskeJmeno = prompt("Zadej jméno")

    if (heslo === hesloDatabaze) {
        return "Vítej uživateli" + uzivatelskeJmeno
    } else {
        return "Přístup odepřen"
    }
}

document.body.innerHTML += overeniHesla("1234")*/

/*const komponenta = (nazev, cena, cilovka) => {
    const vypocetSlevy = cena - (cena * sleva)
    retun`<h2>${nazev}</h2>
    <p>Původní cena: ${cena}, Cena po slevě: ${vypocetSlevy}</p>
    <p>${cilovka}</p>`
}*/

const vek = 20
const zprava = "Vítej"

if (vek > 18) {
    const zprava = "Vítej uživateli"
    console.log(zprava)
}

if (true) {
    const zprava = "xxx"
}

console.log(zprava)