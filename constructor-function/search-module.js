
module.exports = function (array,name){ //commonJS 방식
    for(let i=0;i<array.length;i++){
        if(array[i]===name){
            console.log(array[i],i)
        }else{
            console.log(array[i]+`씨는 ${name}가 아닙니다.`)
        }
    }
}

