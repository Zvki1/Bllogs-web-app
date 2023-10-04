const fs=require('fs');
//reading files

// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//         console.log(data.toString());
// })

// fs.appendFile('./docs/blog1.txt','extrension b roooo',(err)=>{
//     console.log('saved');
// })
// fs.appendFile('./docs/blog55.txt','new file',(err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('done');
//     }
// })

// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log('2');
//         console.log(data.toString());
// })
//writing files
// fs.writeFile('./docs/blog2.txt',"hellooo mohamed",()=>{
// console.log('file was return')
// })

// deleting a file 
// fs.unlink('./docs/blog55.txt',(err)=>{
//     if(err)throw err
//     console.log('file deleted');
// })
//renaming a file 
// fs.rename('./docs/blogjdid.txt','blogjdid222',(err)=>{
//     if (err) throw err;
//     console.log('renamed');
// })
//directores
  //checking if the direcory exist
    if (fs.existsSync('./assets')) {
        fs.rmdirSync('assets')
        console.log('done');
        
    }
// fs.rmdir('./assets',(err)=>{
//     if (err) {
        
//         console.log(err);
//     }
//     console.log("done");
// })
// console.log(fs.existsSync('./assets'));

// fs.mkdir('./assets',(err)=>{
// if (err) {
//     console.log(err);
// }
// console.log("created");
// })

//delete files

// fs.writeFile('./docs/deleteme.txt', "hellooo mohamed", (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//     } else {
//         console.log('File was created');
//         // Now, let's delete the file
//         if (fs.existsSync('./docs/deleteme.txt')) {
//             fs.unlink('./docs/deleteme.txt', (err) => {
//                 if (err) {
//                     console.error('Error deleting file:', err);
//                 } else {
//                     console.log('File was deleted');
//                 }
//             });
//         } else {
//             console.log("File doesn't exist");
//         }
//     }
// });

