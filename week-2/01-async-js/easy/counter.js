

let i=0;
// setInterval(() => {
//     console.log(i++);
// }, 1000);

function incrementCounter(){
    i++;
    console.log(i);
    setTimeout(incrementCounter,1000);
}

incrementCounter();
