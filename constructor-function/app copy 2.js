// function c(year,month,day){
//     return{
//         year : year,
//         month : month,
//         day : day,

//     }
// }
function c(a,b,c) {
        this.year = a,
        this.month = b,
        this.day = c
}


const test = c(2023,3,29).year
console.log(test)


const asdf = {
    a : [1,2,3,4,5,6]
}

// const b = {
//     year : 2023,
//     month : 3,
//     day : 29,

// }                   //이것과 같은 내용