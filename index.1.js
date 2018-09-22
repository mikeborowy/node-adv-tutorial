const cluster = require('cluster');
//Is the file has been execcuted in master mode?
if(cluster.isMaster){
    //Cause index.js executed again but in
    //child mode
    cluster.fork(); //1st server
    cluster.fork(); //2nd server
}
else{ 
    //I am a child, I'm going to act like a
    //server and do nothing else     
    const express = require('express');
    const app = express();
    
    function doWork(duration){
        const start = Date.now();
        while(Date.now() - start < duration){
            
        };
    };
    
    app.get('/', (req,res) => {
        doWork(5000);
        res.send('Hello there');
    })
    .get('/fast', (req,res) => {
        res.send('Hello there');
    })
    .listen(3000);
}
 