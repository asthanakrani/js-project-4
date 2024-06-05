let fun7 = (fahrenheit) => {

    let celsius = (fahrenheit - 32) / 1.8;
    return celsius; 
}
document.getElementById("fhr").innerHTML = fun7(50);
