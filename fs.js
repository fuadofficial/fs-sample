const fs = require('fs');
const fileName = 'example.txt';

//  Create or Write to a File
fs.writeFileSync(fileName, 'This is the initial content.\n');
console.log('File created and initial content written.');

// Append to the File
fs.appendFileSync(fileName, 'This is appended content.\n');
console.log('Content appended.');

//  Read the File
const data = fs.readFileSync(fileName, 'utf8');
console.log('File content:');
console.log(data);
