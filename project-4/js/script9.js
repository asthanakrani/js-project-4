let fun9 = (no) => {

    if(no % 2 == 0){
        document.getElementById("msg").innerHTML = `${no} is an even number.`;
    }
    else{
        document.getElementById("msg").innerHTML = `${no} is an odd number.`;
    }
}

document.getElementById("oe").innerHTML = fun9(10)