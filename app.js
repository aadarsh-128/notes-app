const chalk = require( 'chalk' );
const yargs = require( 'yargs' );
const notes = require( './notes.js' );


// Create add command
yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add body',
            demandOption: true,
            type: 'string'
        }
    },
    handler( argv ){
        notes.addNote( argv.title, argv.body )
    }
} )

// Create remove command
yargs.command( {
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'           
        }
    },
    handler( argv )
    {
        notes.removeNote( argv.title );
    }
} )

// listing the notes
yargs.command( {
    command: 'list',
    describe: 'Listing notes',
    handler ()
    {
        notes.listNotes();
    }
} )


// Reading the notes
yargs.command( {
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'           
        }
    },
    handler( argv )
    {
        notes.readNote( argv.title );
    }
} )


// calling yargs
yargs.parse()