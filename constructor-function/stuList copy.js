const studentLsit = [
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
// console.log(studentLsit[studentLsit.length-1])

// for(let i=0;i<studentLsit.length;i++){
//     if(studentLsit[i]==="박달재"){
//         console.log(studentLsit[i],i)
//     }else{
//         console.log(studentLsit[i]+`씨는 박달재가 아닙니다.`)
//     }
// }

// function searching(array,name){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===name){
//             console.log(array[i],i)
//         }else{
//             console.log(array[i]+`씨는 ${name}가 아닙니다.`)
//         }
//     }
// }

// searching(studentLsit,"박달재")

const example = {
    order : 0,
    name : "강지민"
}

// function makeObject(order, name){ //?객체 리턴방식
//     if(typeof(order)==='number'&&typeof(name)===`string`){
//         order : order
//         name : name
//     }else{
//         console.log("order의 값이 숫자가 아닙니다.")
//     }
// }
// let a = makeObject(0,studentLsit[0])

//? 생성자 함수 방식, 인스턴스로 생성이 됐다 라는 내용까지 포함해서 생성됨
function makeConstructor(order,name){ 
    this.order = order
    this.name = name
    function order(order){
        if(typeof(order)==='number'&&typeof(name)===`string`){
            return this.order, this.name
        }
    }
}
let b = makeConstructor(0,studentLsit[0])
console.log(b)