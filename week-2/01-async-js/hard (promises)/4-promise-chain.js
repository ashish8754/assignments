/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    const interval=t*1000;
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
    },interval);  
    })
}

function wait2(t) {
    const interval=t*1000;
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      },interval);  
    })
}

function wait3(t) {
    const interval=t*1000;
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      },interval);  
    })
}

function calculateTime(t1, t2, t3) {

    const startTime=Date.now();

    return wait1(t1).then(()=>{
        return wait2(t2);
    }).then(()=>{
        return wait3(t3);
    }).then(()=>{
        const endTime=Date.now();
        const totalTime=endTime-startTime;
        return totalTime;
    })

}

module.exports = calculateTime;
