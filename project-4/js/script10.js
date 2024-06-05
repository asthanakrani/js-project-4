let fun10 = (a, b) =>{

    document.getElementById("var").innerHTML = `Before swapping: a = ${a}, b = ${b}`;
    console.log(`Before swapping: a = ${a}, b = ${b}`);
    
    a = a + b;
    b = a - b;
    a = a - b;
    
    document.getElementById("var").innerHTML = `After swapping: a = ${a}, b = ${b}`;
    console.log(`After swapping: a = ${a}, b = ${b}`);
}
fun10(10 , 9);