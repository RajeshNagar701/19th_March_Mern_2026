
var fs = require('fs');
const input=process.argv;
                      //  0        1      2     3                4
if(input[2]=='monil')  // nodemon app.js monil fruits.txt "apple mango banana"
{
	fs.writeFileSync(input[3],input[4]);  //fs.writeFileSync('demo.txt','this writting text')
}
else if(input[2]=='read')
{
	fs.readFile(input[3],'utf8',(err,data)=>{
		console.log(data);
	})
}
else if(input[2]=='remove')
{
	fs.unlinkSync(input[3]); // delete file
}
else
{
	console.log('Invalid input');
}



//cmd : node app.js add myfile.txt 'hi hello'  // add file
//cmd : node app.js read myfile.txt		    // read file
//cmd : node app.js remove myfile.txt  		// remove file