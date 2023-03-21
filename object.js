const car={
    brand:'tesla',
    model:3,
    weight:'980kg',
    seating:'5 adults',
    start(){
        return 'Car is starting';
    }
}
// object dot notation 

// console.log(car.brand);
// console.log(car.model);
// console.log(car.weight);
// console.log(car.seating);
// console.log(car.start());

// object brackets notation 

// console.log(car['brand']) 
// console.log(car['model']) 
// console.log(car['weight']) 
// console.log(car['seating']) 

const a={name:"laptop",color:'black',price:12000};
const b={name:"monitor",color:'gray',price:5000};
const c={name:"mobile",color:'black',price:2500};
const totalPrice=a.price+b.price+c.price;
// console.log(totalPrice);