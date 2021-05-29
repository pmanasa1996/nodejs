 //const validator=require('validator')
// const chalk=require('chalk')
const yargs=require('yargs');
const notes=require('./notes.js');
//const { describe, demandOption, require } = require('yargs')
// console.log(validator.isURL('HTTP://read.io'))
// chalk.green('manasa')
// console.log(chalk.red('manasa',chalk.blue.underline('manu')))

// const command=process.argv[2]
// console.log(process.argv[2])

 yargs.version('1.1.0')
// if(command==='add'){
//     console.log('adding')
// }
// else if(command==='remove'){
//     console.log('removing')
// }
// console.log(yargs.argv)
yargs.command({
    command:'add',
    describe:'add a new node',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type: 'string'

        },
        body:{
            describe:'add body',
            demandOption:true,
            type: 'string'


        }
    },
    handler:function(argv){
        // console.log('Tittle:'+argv.title)
        // console.log('Body:'+argv.body)
        notes.addNote(argv.title,argv.body);

    }
})
yargs.parse();
 yargs.command({
     command:'remove',
     describe:'removing node',
     builder:{
         title:{
             describe:'note title',
             demandOption:true,
             type:'string'
         }
     },

     handler:function(argv){
        //notes.removeNote(argv.title)
     }
 })
 yargs.command({
    command:'list',
        describe:'listing  note',
         handler:function(argv){
             notes.listNotes();
         }
    })
 yargs.parse();

// yargs.command({
//     command:'list',
//     describe:'listing  note',
//     handler:function(){
//         console.log('listing all the note..')
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'read note',
//     handler:function(){
//         console.log('reading note..')
//     }
// })




