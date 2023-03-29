const fs = require('fs')

function user(id, password, email){
    this.id = id,
    this.password = password,
    this.email = email
}

let names =["parkdaljae","daljae","jieun"]
let passwords =["1234","1234","1234"]
let emails =["dv.over931@gmail.com","daljae@gmail.com","jieun@gmail.com"]

let members =[]

for(let i=0;i<3;i++){
    members.push(new user(names[i],passwords[i],emails[i]))
}

fs.writeFileSync("members.JSON",JSON.stringify(members,null,2),"utf-8")
console.dir(members)