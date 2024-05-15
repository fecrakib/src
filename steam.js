const { error } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();

// Define a route to serve a file using streams
app.get('/file', (req, res) => {
 const filePath  = './text.txt';
 const streams = fs.createReadStream(filePath);
res.setHeader('Content-type','text/plain');
 streams.pipe(res);

 streams.on('error',(err)=>{
    res.status(500).send('Internal server error');
    console.log(err)
 })

});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
