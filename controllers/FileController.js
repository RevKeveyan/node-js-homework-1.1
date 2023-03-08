const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'../');

exports.createFile= () =>{
    fs.writeFileSync(dirPath+'files/file.txt', 'Text');
}
exports.updateFile = () =>{
    fs.writeFileSync(dirPath+'files/file.txt', 'new Text');
}
exports.deleteFile= () =>{
    fs.unlink(dirPath+'files/file.txt', function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('jnjvav');
        }
    });
}

















// function createFile(fileName, fileContent) {
//     const filePath = path.join('files', fileName); // Create a path to the file in the 'files' folder
  
//     return new Promise((resolve, reject) => {
//       fs.writeFile(filePath, fileContent, (err) => {
//         if (err) {
//           console.error(err);
//           reject(err);
//         } else {
//           console.log(`File ${fileName} has been created.`);
//           resolve(`File ${fileName} has been created.`);
//         }
//       });
//     });
//   }
  

// exports.createFile = async () => {
//     const fileName = 'file.html'; // Name of the file to create
//     const fileContent = '<h1>Nor file</h1>'; //

//   try {
//     const result = await createFile(fileName, fileContent);
//     res.status(200).send(result);
//   } catch (err) {
//     res.status(500).send('Error writing to file');
//   }
// }