const fs=require('fs');
const yargs=('yargs');
const chalk=require('chalk');
// console.log('notes.js')

//     return 'this is your notes...'
    const addNote=function(title,body){
        const notes=loadNotes();
        const duplicateNotes=notes.filter(function(note){
            return note.title===title;
        });
        if(duplicateNotes.length===0){
            notes.push({
                title:title,
                body:body
            })
            saveNotes(notes);
                console.log('note added successfully');
                
        }
        else{
            console.log("note tittle already existed");
        }
   }
   const removeNote=function(tittle){
       const notes=loadNotes()
       const notesToKeep=notes.filter(function(note){
           return note.title!==tittle
       })
       if(notes.length>notesToKeep.length){
           console.log(chalk.green.inverse('note removed'));
           saveNotes(notesToKeep)
       }
       else{
           console.log(chalk.red.inverse('note found'));
       }
   }
   const loadNotes=function(){
       try{
        const dataBuffer=fs.readFileSync('1-json.json')
        const jsondata=dataBuffer.toString()
        return JSON.parse(jsondata)

       }
       catch(e){
           return []

       }
   
}
const saveNotes=function(notes){
    const jsondata=JSON.stringify(notes)
    fs.writeFileSync('1-json.json',jsondata)
}
module.exports={addNote:addNote,
    removeNote:removeNote
}
