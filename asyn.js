// const { trace } = require('console');
// const fs  = require('fs');
// fs.readFile('./text.txt','utf-8',(e,data)=>{
//     // if(e){
//     //     throw Error("Error reading text")
//     // }
//     // console.log(data)
//     try {
//         console.log(data)
        
//     } catch (e)  {
//         console.log(e)
        
//     }
//     fs.watchFile('./write.txt',data,'utf-8',(e)=>{
//         if(e){
//             throw Error("Error ")
//         }
//     })

// })

const fs = require('fs');

// Read data from text.txt
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) {
        throw new Error("Error reading text");
    }
    console.log(data);

    // Write data to write.txt
    fs.writeFile('./write.txt', data, 'utf-8', (err) => {
        if (err) {
            throw new Error("Error writing to file");
        }
        console.log('Data written to write.txt');
    });
});
