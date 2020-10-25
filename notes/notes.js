const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.find((note) => note.title === title)

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('note saved'))
    }else{
        console.log(chalk.red.inverse('note title taken'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const keepNotes = notes.filter((note) => note.title !== title)

    if (notes.length === keepNotes.length){
        console.log(chalk.red.inverse("No note found"))
    }else{
        saveNotes(keepNotes);
        console.log(chalk.green.inverse("Note removed!"))
    }
}

const listNotes = () => {
    console.log(chalk.green.inverse("Listing notes"))
    loadNotes().forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    console.log(`Finding note ${title}`)

    const noteFound = loadNotes().find((note) => note.title === title)

    if (noteFound){
        console.log(chalk.green.inverse(noteFound.title))
        console.log(noteFound.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
