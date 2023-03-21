function oddEven(num){
    if(num%2===0){
        console.log('This is Even Number')
    }
    else{
        console.log('This is Odd Number')
    }
}
// oddEven(85)

function checkOddEven(num){
    if(num%2===0){
        return 'Even Number'
    }
    else{
        return 'Odd Number'
    }
}
console.log(checkOddEven(96))