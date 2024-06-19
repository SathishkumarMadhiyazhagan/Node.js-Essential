const fs = require('fs');

// fs.renameSync('./hello/file1.md', './hello/newfile.md');

// fs.rename('./hello/newfile.md', './hello/file1.md', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// });

// fs.rename('./hello/file1.md', './your-files-here/file1.md', (err) => {
//   if(err){
//     throw err;
//   }
// });

// fs.renameSync('./your-files-here/file1.md', './hello/file1.md');

// fs.unlinkSync('./hello/notes.md')

fs.unlink('./hello/file1.md', (e) => {
  if(e) {
    throw e;
  }
})
