
var fs = require('fs');
//var data = fs.writeFileSync('dummyfile.txt', 'writecode');
const input=process.argv;
                      //  0        1      2     3                4
if(input[2]=='add')  // nodemon index.js add fruits.txt "apple mango banana"
{
	fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='read')
{
	fs.readFile(input[3],'utf8',(err,data)=>{
		console.log(data);
	})
}
else if(input[2]=='remove')
{
	fs.unlinkSync(input[3]);
}
else
{
	console.log('Invalid input');
}



//cmd : node index.js add myfile.txt 'hi hello'  // add file
//cmd : node index.js read myfile.txt		    // read file
//cmd : node index.js remove myfile.txt  		// remove file