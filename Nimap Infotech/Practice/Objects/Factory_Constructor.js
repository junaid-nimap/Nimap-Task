// Factory Function
function multiAdress(street , city, Zipcode){
    return {
        street, 
        city, 
        Zipcode, 
    }
}
let One = multiAdress("Mazggoan", "Mumbai", 400010); 
console.log(One); 
let Two = multiAdress("Kurla", "Thane", 400002);
console.log(Two);  

// Constructor 
function MultiAdress1(street, city){
    this.street = street,
    this.city = city;
}
let Consone = new MultiAdress1("Mazgoan", "Mumbai"); 
console.log(Consone); 

let Consone1 = new MultiAdress1("Mazgoan", "Mumbai"); 
console.log(Consone1); 