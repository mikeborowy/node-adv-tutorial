//N ow every child in the cluster only has one thread available.
process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
const crypto = require('crypto');
//Is the file has been execcuted in master mode?
if(cluster.isMaster){
    //Cause index.js executed * again * but in
    //child mode
    cluster.fork(); //1st server
}
else{ 
    //I am a child, I'm going to act like a
    //server and do nothing else     
    const express = require('express');
    const app = express();
          
    app.get('/', (req,res) => {
            crypto.pbkdf2('a','b', 100000, 512, 'sha512', () => {
                res.send('Hello there');
            });
        })
        .get('/fast', (req,res) => {
            res.send('Hello there');
        })
        .listen(3000);
}