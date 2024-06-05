let fun6 = (b, c) => {
    
    let ans = (b * b) + (2 * b * c) + (b * b);
    return ans;
}

document.getElementById("ans").innerHTML = fun6(3, 4);