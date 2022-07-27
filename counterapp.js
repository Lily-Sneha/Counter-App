let counter = 0;

function plus() {
    counter++
    console.log(document.getElementById("zero").innerHTML = counter);
    if (counter>= 10) {
        document.getElementById("message").innerHTML = "you keep going"
    } else {
        document.getElementById("message").innerHTML = " "
    }

}

function minus() {
    counter--
    console.log(document.getElementById("zero").innerHTML = counter);
    if(counter<10) {
        document.getElementById("message").innerHTML = " "
    }
    else {
        document.getElementById("message").innerHTML = "you keep going"
    }
}

function set() {
    counter = 0
    console.log(document.getElementById("zero").innerHTML = counter);
    if(counter=0) {
        document.getElementById("message").innerHTML = " "
    } else {
        document.getElementById("message").innerHTML = " "
    }
}

