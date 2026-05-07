
// Create a new, empty file using the open()  mode  w r a   w+ r+ a+ Mode method:
/*
"r" (Read): Opens for reading. Fails if the file does not exist.
"w" (Write/Truncate): Creates a new file or truncates an existing file to zero length. Opens for writing only.
"a" (Append): Opens for writing at the end of the file. Creates the file if it does not exist.
"r+" (Read/Write): Opens for both reading and writing. Starts at the beginning.
"w+" (Read/Write/Truncate): Opens for reading and writing, truncating existing content or creating a new file.
"a+" (Read/Append): Opens for reading and appending (reading occurs anywhere, writing only at the end).

*/

var fs = require('fs');

fs.open('TestFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});