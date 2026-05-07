/*
Writing File
Use fs.writeFile() method to write data to a file and if file not exist then create also. 
If file already exists then it overwrites the existing content 
otherwise it creates a new file and writes data into it.

fs.appendFile()
fs.open()
fs.writeFile()


1) fs.writeFile(filename, data[, options], callback)

The following example creates a new file called test.txt and writes "Hello World" into 
it asynchronously.

*/

/*
var fs = require('fs');

fs.writeFile('test.txt', 'Hi raj Hello rajesh /*!', function (err) { 
	if (err)
	console.log(err);
	else
	console.log('fIle create if exitst then Write operation complete.');
});	
*/


/*
2)  In the same way, use fs.appendFile() method to append the content to an 
existing file. Example: Append File Content
*/


var fs = require('fs');

fs.appendFile('test.txt', ' Tops Technologies', function (err) { 
        if (err)
        console.log(err);
        else
        console.log(' create and Write/append operation complete.');
});

