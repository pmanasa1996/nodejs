const fs=require('fs');
const yargs=('yargs');
const chalk=require('chalk');
const { title } = require('process');
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


const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.inverse('your notes'));
    notes.forEach((note)=>{
        console.log("title:"+chalk.red(note.body))
    });
}
const readNote=function(title){
    const notes=loadNotes();
    const note=notes.find((note)=>note.title===title)
    if(note){
        console.log(chalk.green(note.title)+":"+chalk.blue(note.body));
    }
    else{
        console.log(chalk.red.inverse("note not found!"));
    }
}
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
