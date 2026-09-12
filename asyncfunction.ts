function function1() {
    setTimeout(() => {
        console.log("3 I will execute after 15 seconds"), 15000});
}

function function2() {
    setTimeout(() => {
        console.log("2 I will execute after 5 seconds"), 5000 });
}

function function3() {
    setTimeout(() => {
        console.log("1 I will execute after 1 second"), 1000});
}

function1();
function2();
function3();