function largest(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log('Largest Number: ',num1);
    }
    else if(num2 > num1 && num2 > num3){
        console.log('Largest Number: ',num2);
    }
    else{
        console.log('Largest Number: ',num3);
    }
}
// largest (103,94,45)

function largest(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return 'Largest Number: ',num1;
    }
    else if(num2 > num1 && num2 > num3){
        return 'Largest Number: ',num2;
    }
    else{
        return 'Largest Number: ',num3;
    }
}
console.log(largest (103,94,45));