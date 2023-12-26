/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    return new Promise((resolve)=>{
        let start=new Date().getTime();
        let current=null;

        do{
            current=new Date().getTime();
        }while(current-start<milliseconds)
        resolve();
    });
}

module.exports = sleep;
