let circle = (r) => {
    const pi = 3.14;
    const area = pi * r * r;
    return area;
}
document.getElementById("aera").innerHTML = circle(10);