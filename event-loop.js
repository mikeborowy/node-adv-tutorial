//node mf=yFiles.js
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = []; //thread pool operations

//New timers, tasks, operatios are recorded from myFile running
myFile.runContent();

function shouldContinue(){
    //Check one: Any pending setTimeout, setInterval, setImmediate?
    //Check two: Any pending OS tasks? (Like server listening to port)
    //Check three: Any pending longrunning operations? (Like fs module)
    return pendingTimers.length ||
            pendingOSTasks.length ||
            pendingOperations.length
}
//entire body executes in one 'tick'
while(shouldContinue()){
    //1) Node looks at pendingTimers[] (if setTimeout and setInterval are done) 
    //  and sees if any functions (callbacks) are ready to be called. 

    //2) Node looks at pendingOSTasks[] and pendingOperations[] and calls
    //   relevant callbacks

    //3) Pause execution (loop is not stopped it is pause). Continue when...
    //  - a new pendingOSTask is done
    //  - a new pendingOperations is done
    //  - a time is about to complete

    //4) Node looks at pendingTimers[]. Call any setImmediate.

    //5) Handle any 'close' events (terminates any servers or any files open)
    //  (handles cleanup code)
};


//exit back to terminal