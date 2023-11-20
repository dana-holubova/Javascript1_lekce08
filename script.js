let vek

vek = 20
vek = 30
const odstavec = document.querySelector("#odstave")

//vypisovani do konzole
console.log(vek)

//undefined - proěmnná není inicializována
//null = neutrální hodnota

/*
if (vek > 18) {
    msg = "Jsi dospělák"
}*/

const mojeFce = () => {
    console.log("Test")
}

//do proměnné hodnota vložím výstup fce
const hodnota = mojeFce()
//Fce bez návratové hodnoty vrací "undefined"

if (odstavec === null) {
    console.log("Element nebyl nalezen.")
}
console.log(odstavec)