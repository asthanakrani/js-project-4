let fun5 = (x,y,z) => {
    
    const ans = ((y * y) - (4 * x * z)) / (2 * x);
    return ans;
}

document.getElementById("pr").innerHTML = fun5(8,5,3);
