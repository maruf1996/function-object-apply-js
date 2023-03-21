// problem 1 
function areaOfCircle(r){
    const pi=3.1416;
    const area=pi*r*r;
    return parseFloat(area.toFixed(2))
}
// console.log(areaOfCircle(5));
// console.log(areaOfCircle(7));


// problem 2 
function feetToInch(feet){
    const inch=feet*12;
    return parseFloat(inch.toFixed(2));
}
// console.log(feetToInch(5.4));


// problem 3 
function discountCalc(price){
    if(price>5000){
        const discount=price*(20/100);
        const netPrice=price-discount;
        return netPrice;
    }
    else if(price>=3000){
        const discount=price*(15/100);
        const netPrice=price-discount;
        return netPrice;
    }
    else if(price>=1000){
        const discount=price*(10/100);
        const netPrice=price-discount;
        return netPrice;
    }
    else{
        return 'you can not get discount';
    }
}
// console.log(discountCalc(4000));
// console.log(discountCalc(1000));


// problem 4 
function isLeapYear(year){
    if(year%4===0 && year%100 !==0 || year%400===0){
        return 'Leap Year';
    }
    else{
        return 'Not Leap Year';
    }
}
// console.log(isLeapYear(2024));


// problem 5 

