let fun8 = (celcius) => {

    let fahrenheit = (celcius * 1.8) + 32;
    return fahrenheit;
}

document.getElementById("cel").innerHTML = fun8(60);
