let obj = {
  get propname(){

  },
  set propname(value){

  }
}
let user = {
  name:"John",
  surname:"Smith",
  get fullName(){
    return `${this.name} ${this.surname}`
  },
  set fullName(value){
    [this.name,this.surname] = value.split(" ")
  }
}
console.log(user)
console.log(user.fullName)
console.log(user.name)
console.log(user.surname)

user.fullName = "Kim JinHo" //set 없이는 동작이 안됨.
console.log(user)
console.log(user.fullName)
console.log(user.name)
console.log(user.surname)
