



const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Create add command  nodemon index.js Heading --title="Diwali" --body="50% Diwali Sale "
yargs.command({
    command: 'Heading',
    describe: 'Add a new note',
    builder: {  // arguments 
        title: {
            describe: 'add title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'add body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(argv.title);
		console.log(argv.body);
    }
})


yargs.command({
    command: 'result',
    builder: {  // arguments 
        English: {
            describe: 'add English Marks',
            demandOption: true,
            type: 'number'
        },
        Hindi: {
            describe: 'add Hindi Marks',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function (argv) {
        console.log("Total Result is : "+  (argv.English+argv.Hindi));
    }
})
yargs.parse()