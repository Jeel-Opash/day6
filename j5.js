//classes and object
// class Toyota{
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner =new Toyota();
// fortuner.setBrand("fortuner");



//constructor
//inheritance:parent=>extend=>child
//super keyword:  

class car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model;

    }
    showDetails(){
        console.log(`this car is a ${this.brand} ${this.model}.`);
    }
}
const car1=new car("toyato","Corolla");

car1.showDetails();