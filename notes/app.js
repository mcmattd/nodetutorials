const yargs = require('yargs')
const notes = require('./notes.js')



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        },
        body: {
            type: 'string',
            describe: 'Note body',
            demandOption: 'true'
        }
    },
    handler: (argv) => notes.addNotes(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        },
    },
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: () => notes.listNotes()
})

yargs.command({
    command: 'read',
    describe: 'Reading note',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        },
    },
    handler: () => notes.readNote(argv.title)
})

yargs.parse()
