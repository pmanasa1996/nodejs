const fs=require('fs')
//      const book={
//      tittle: "ego is your enemy",
//      author:"ryan"

//  }
//  const stringmifybook =JSON.stringify(book)
// fs.writeFileSync('1-json.json',stringmifybook)
// const dataBuffer=fs.readFileSync('1-json.json')
// const jsondata=dataBuffer.toString()
// const data=JSON.parse(jsondata)
// console.log(data.author)
const dataBuffer=fs.readFileSync('1-json.json')
const datajson=dataBuffer.toString()
const user=JSON.parse(datajson)
console.log(user.name)
user.name="rakshu"
user.age="23"
const u=JSON.stringify(user)
fs.writeFileSync('1-json.json',u)
console.log(u)

