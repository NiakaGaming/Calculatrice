// VARIABLES
// ----------------------------------------------------
// BTNs
let pourcent = document.getElementsByClassName("btn")[0];
let ce = pourcent.nextElementSibling;
let c = ce.nextElementSibling;
let backspace = c.nextElementSibling;

let derive = document.getElementsByClassName("btn")[4];
let expo = derive.nextElementSibling;
let racine = expo.nextElementSibling;
let div = racine.nextElementSibling;

let nb7 = document.getElementsByClassName("btn")[8];
let nb8 = nb7.nextElementSibling;
let nb9 = nb8.nextElementSibling;
let mult = nb9.nextElementSibling;

let nb4 = document.getElementsByClassName("btn")[12];
let nb5 = nb4.nextElementSibling;
let nb6 = nb5.nextElementSibling;
let moins = nb6.nextElementSibling;

let nb1 = document.getElementsByClassName("btn")[16];
let nb2 = nb1.nextElementSibling;
let nb3 = nb2.nextElementSibling;
let plus = nb3.nextElementSibling;

let plusOuMoins = document.getElementsByClassName("btn")[20];
let nb0 = plusOuMoins.nextElementSibling;
let point = nb0.nextElementSibling;
let egale = point.nextElementSibling;

// VARs for 'SIGNS' btn
let signs = [" + ", " - ", " * ", " / "]
let plusOn = false;
let moinsOn = false;
let multOn = false;
let divOn = false;

// Screen VARs
let temp = document.querySelector(".temp");
let tempNb = 0;
let tempText = "";
let result = document.querySelector(".resulat");
let resultat = "";

nb0.addEventListener("click", nbr0);
nb1.addEventListener("click", nbr1);
nb2.addEventListener("click", nbr2);
nb3.addEventListener("click", nbr3);
nb4.addEventListener("click", nbr4);
nb5.addEventListener("click", nbr5);
nb6.addEventListener("click", nbr6);
nb7.addEventListener("click", nbr7);
nb8.addEventListener("click", nbr8);
nb9.addEventListener("click", nbr9);
c.addEventListener("click", esc);
ce.addEventListener("click", clearDigit);
plus.addEventListener("click", plusBtn);
moins.addEventListener("click", moinsBtn);
mult.addEventListener("click", multBtn);
div.addEventListener("click", divBtn);
egale.addEventListener("click", enter);
backspace.addEventListener("click", del);

function typeIn(event) {
    switch (event.which) {
        case 8:
            del();
            break;
        case 13:
            enter();
            break;
        case 27:
            esc();
            break;
        case 96:
            nbr0();
            break;
        case 97:
            nbr1();
            break;
        case 98:
            nbr2();
            break;
        case 99:
            nbr3();
            break;
        case 100:
            nbr4();
            break;
        case 101:
            nbr5();
            break;
        case 102:
            nbr6();
            break;
        case 103:
            nbr7();
            break;
        case 104:
            nbr8();
            break;
        case 105:
            nbr9();
            break;
        case 106:
            multBtn();
            break;
        case 107:
            plusBtn()
            break;
        case 109:
            moinsBtn()
            break;
        case 111:
            divBtn()
            break;
    }
}
document.addEventListener("keydown", typeIn);

// DIGITS
function nbr0() {
    resultat += 0;
    result.innerText = resultat;
    nb0.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb0.style.backgroundColor = "";
    }, 100);
}
function nbr1() {
    resultat += 1;
    result.innerText = resultat;
    nb1.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb1.style.backgroundColor = "";
    }, 100);
}
function nbr2() {
    resultat += 2;
    result.innerText = resultat;
    nb2.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb2.style.backgroundColor = "";
    }, 100);
}
function nbr3() {
    resultat += 3;
    result.innerText = resultat;
    nb3.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb3.style.backgroundColor = "";
    }, 100);
}
function nbr4() {
    resultat += 4;
    result.innerText = resultat;
    nb4.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb4.style.backgroundColor = "";
    }, 100);
}
function nbr5() {
    resultat += 5;
    result.innerText = resultat;
    nb5.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb5.style.backgroundColor = "";
    }, 100);
}
function nbr6() {
    resultat += 6;
    result.innerText = resultat;
    nb6.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb6.style.backgroundColor = "";
    }, 100);
}
function nbr7() {
    resultat += 7;
    result.innerText = resultat;
    nb7.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb7.style.backgroundColor = "";
    }, 100);
}
function nbr8() {
    resultat += 8;
    result.innerText = resultat;
    nb8.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb8.style.backgroundColor = "";
    }, 100);
}
function nbr9() {
    resultat += 9;
    result.innerText = resultat;
    nb9.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        nb9.style.backgroundColor = "";
    }, 100);
}
// BTNs
let k = 0;
function enter() {
    egale.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        egale.style.backgroundColor = "";
    }, 100);

    calc();
    result.innerText = tempNb;
    tempText += resultat
    signs.forEach(element => {
        if ((tempText.slice(-3)) == element) {
            k++;
        }
    });
    if (k == 0) {
        temp.innerText = tempText + " = ";
    }
    else {
        temp.innerText = tempText.slice(0, -3) + " = ";
        k = 0;
    }
    tempText = "";
    resultat = "";
    on();
}
function esc() {
    c.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        c.style.backgroundColor = "";
    }, 100);

    resultat = "";
    result.innerText = "0";
    tempText = "";
    tempNb = 0;
    temp.innerText = "";
    on();
}
function clearDigit() {
    ce.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        ce.style.backgroundColor = "";
    }, 100);

    resultat = "";
    result.innerText = "0";
}
function del() {
    backspace.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        backspace.style.backgroundColor = "";
    }, 100);

    resultat = resultat.substr(0, resultat.length - 1);
    result.innerText = resultat;
    if (resultat == "") {
        result.innerText = "0";
    }
}
// SIGNS
function plusBtn() {
    plus.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        plus.style.backgroundColor = "";
    }, 100);

    // First time it's clicked and no other sign is clicked but the calcule is ON
    if (!plusOn && !resultat == "" && moinsOn || !plusOn && !resultat == "" && multOn || !plusOn && !resultat == "" && divOn) {
        calc();
        tempText += resultat + signs[0];
        temp.innerText = tempText;
        resultat = "";
        on();
        plusOn = true;
        result.innerText = tempNb;
    }
    // First time it's clicked and no other sign is clicked but the calcule is just started
    else if (!plusOn && !resultat == "") {
        tempNb += Number(resultat);
        tempText += resultat + signs[0];
        temp.innerText = tempText;
        resultat = "";
        on();
        plusOn = true;
        result.innerText = tempNb;
    }
    // Check if there is no digit enter before
    else if (!plusOn && tempText == "") {
        tempNb += Number(resultat);
        tempText = "0 + "
        temp.innerText = tempText;
        on();
        plusOn = true;
        result.innerText = tempNb;
    }
    // Add numbers to a temp var
    else if (plusOn && !resultat == "" && tempText.slice(-3) == signs[0]) {
        tempNb += Number(resultat);
        tempText += resultat + signs[0];
        temp.innerText = tempText;
        resultat = "";
        result.innerText = tempNb;
    }
    // Change sign string if any another has been entered and set var to true
    else if (!plusOn && resultat == "") {
        tempText = tempText.slice(0, -3) + signs[0];
        temp.innerText = tempText;
        on();
        plusOn = true;
        result.innerText = tempNb;
    }
}
function moinsBtn() {
    moins.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        moins.style.backgroundColor = "";
    }, 100);

    // First time it's clicked and no other sign is clicked but the calcule is ON
    if (!moinsOn && !resultat == "" && plusOn || !moinsOn && !resultat == "" && multOn || !moinsOn && !resultat == "" && divOn) {
        calc();
        tempText += resultat + signs[1];
        temp.innerText = tempText;
        resultat = "";
        on();
        moinsOn = true;
        result.innerText = tempNb;
    }
    // First time it's clicked and no other sign is clicked but the calcule is just started
    else if (!moinsOn && !resultat == "") {
        tempNb += Number(resultat);
        tempText += resultat + signs[1];
        temp.innerText = tempText;
        resultat = "";
        on();
        moinsOn = true;
        result.innerText = tempNb;
    }
    // Check if there is no digit enter before
    else if (!moinsOn && tempText == "") {
        tempNb -= Number(resultat);
        tempText = "0 - "
        temp.innerText = tempText;
        on();
        moinsOn = true;
        result.innerText = tempNb;
    }
    // Add numbers to a temp var
    else if (moinsOn && !resultat == "" && tempText.slice(-3) == signs[1]) {
        tempNb -= Number(resultat);
        tempText += resultat + signs[1];
        temp.innerText = tempText;
        resultat = "";
        result.innerText = tempNb;
    }
    // Change sign string if any another has been entered and set var to true
    else if (!moinsOn && resultat == "") {
        tempText = tempText.slice(0, -3) + signs[1];
        temp.innerText = tempText;
        on();
        moinsOn = true;
        result.innerText = tempNb;
    }
}
function multBtn() {
    mult.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        mult.style.backgroundColor = "";
    }, 100);

    // First time it's clicked and no other sign is clicked but the calcule is ON
    if (!multOn && !resultat == "" && plusOn || !multOn && !resultat == "" && moinsOn || !multOn && !resultat == "" && divOn) {
        calc();
        tempText += resultat + signs[2];
        temp.innerText = tempText;
        resultat = "";
        on();
        multOn = true;
        result.innerText = tempNb;
    }
    // First time it's clicked and no other sign is clicked but the calcule is just started
    else if (!multOn && !resultat == "") {
        tempNb += Number(resultat);
        tempText += resultat + signs[2];
        temp.innerText = tempText;
        resultat = "";
        on();
        multOn = true;
        result.innerText = tempNb;
    }
    // Check if there is no digit enter before
    else if (!multOn && tempText == "") {
        tempNb *= Number(resultat);
        tempText = "0 * "
        temp.innerText = tempText;
        on();
        multOn = true;
        result.innerText = tempNb;
        console.log("cas 4 *");
    }
    // Add numbers to a temp var
    else if (multOn && !resultat == "" && tempText.slice(-3) == signs[2]) {
        tempNb *= Number(resultat);
        tempText += resultat + signs[2];
        temp.innerText = tempText;
        resultat = "";
        result.innerText = tempNb;
    }
    // Change sign string if any another has been entered and set var to true
    else if (!multOn && resultat == "") {
        tempText = tempText.slice(0, -3) + signs[2];
        temp.innerText = tempText;
        on();
        multOn = true;
        result.innerText = tempNb;
    }
}
function divBtn() {
    div.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    setTimeout(() => {
        div.style.backgroundColor = "";
    }, 100);

    // First time it's clicked and no other sign is clicked but the calcule is ON
    if (!divOn && !resultat == "" && plusOn || !divOn && !resultat == "" && moinsOn || !divOn && !resultat == "" && multOn) {
        calc();
        tempText += resultat + signs[3];
        temp.innerText = tempText;
        resultat = "";
        on();
        divOn = true;
        result.innerText = tempNb;
    }
    // First time it's clicked and no other sign is clicked but the calcule is just started
    else if (!divOn && !resultat == "") {
        tempNb += Number(resultat);
        tempText += resultat + signs[3];
        temp.innerText = tempText;
        resultat = "";
        on();
        divOn = true;
        result.innerText = tempNb;
    }
    // Check if there is no digit enter before
    else if (!divOn && tempText == "") {
        tempText = "0 / "
        temp.innerText = tempText;
        on();
        divOn = true;
        result.innerText = tempNb;
    }
    // Add numbers to a temp var
    else if (divOn && !resultat == "" && tempText.slice(-3) == signs[3]) {
        tempNb /= Number(resultat);
        tempText += resultat + signs[3];
        temp.innerText = tempText;
        resultat = "";
        result.innerText = tempNb;
    }
    // Change sign string if any another has been entered and set var to true
    else if (!divOn && resultat == "") {
        tempText = tempText.slice(0, -3) + signs[3];
        temp.innerText = tempText;
        on();
        divOn = true;
        result.innerText = tempNb;
    }
}
// USEFULL
function calc() {
    if (plusOn) {
        tempNb += Number(resultat);
    }
    else if (moinsOn) {
        tempNb -= Number(resultat);
    }
    else if (multOn) {
        tempNb *= Number(resultat);
    }
    else if (divOn) {
        tempNb /= Number(resultat);
    }
}
function on() {
    plusOn = false;
    moinsOn = false;
    multOn = false;
    divOn = false;
}

// 6 BTNs LEFTS
// ------------------------------------------------------------------------------------------------
// 1| %  | ??? Make pourcentage of I dunno what ???
// 2| . | IF point has been activate, can't be done another time unless it's another element (if(resultat == ""){newDigit = true}) || (if(!resultat.includes(".") == ""){ OK !} else{ NIK ZEBI})
// 3| +/- | Change number to negatif/positif
// 4| 1/x | 1/digit
// 5| x² | digit²
// 6| racine carré |racine carré de digit
// ------------------------------------------------------------------------------------------------
// 1.000.000.000.000.000 last digit
// When u hit enter and result is already there, keep last number and add it to total

// FONTS
// https://www.dafont.com/calculator.font

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLDetailsElement/toggle_event#:~:text=The%20toggle%20event%20fires%20when,element%20is%20toggled.&text=Toggles%20the%20open%20state%20of%20the%20element.