const crypto = require('crypto');
const express = require('express');
const app = express();
const Worker = require('webworker-threads').Worker;
        
app.get('/', (req,res) => {
       const worker = new Worker(function() {
        this.onmessage = function() {
            let counter = 0;
            while(counter < 1e9) {
                counter++;
            }
            postMessage(counter);
        }
       });

       worker.onmessage = function(counterObj) {
        console.log(counterObj.data);
        res.send('counter value is: ' + counterObj.data);
       }
       worker.postMessage();
    })
    .listen(3000);
