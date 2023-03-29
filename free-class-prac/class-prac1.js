const studentList = [
    "강지민",
    "곽윤호",
    "권예준",
    "김동주",
    "김은아",
    "김종윤",
    "김지섭",
    "김형진",
    "노수민",
    "류은이",
    "박달재",
    "박수연",
    "박준형",
    "성해경",
    "이경택",
    "이세민",
    "이재권",
    "임지성",
    "장루빈",
    "정성철",
    "정지은",
    "정희은",
    "최대건",
    "한유진",
    "허진",
]

// class Person{                 //age가 음수여도 그대로 동작하는 버그있음
//   constructor(name, age){ 
//     this.name = name
//     this.age = age
//   }
//   sayHello(){
//     console.log(`${this.name}님 ${this.age}살 이시네요!`)
//   }
// }
class Person{
  constructor(name, age){
    this.name = name
    this.age = age
  }
  get age(){
    return this._age;
  }
  set age(value){
    if(value < 0){
      console.log("나이가 음수라니 구라 ㄴ")
      this.gura = "구라"
    }else{
      this.gura = "구라아님"
    }
    this._age = value
  }
  sayHello(){
    console.log(`${this.name}님 ${this.age}살 이시네요!`)
  }
}
let a = new Person("김첨지",15)
console.log(a) //Person { name: '김첨지', gura: '구라아님', _age: 15 }
a.sayHello() //김첨지님 15살 이시네요!

let b = new Person("김폭키",-1) //나이가 음수라니 구라 ㄴ
b.sayHello() //김폭키님 -1살 이시네요! (버그)
console.log(b) //Person { name: '김폭키', gura: '구라', _age: -1 }