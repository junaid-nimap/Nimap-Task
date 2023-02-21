let Address1 = new MultiAdress1("Mazgoan", "Mumbai"); 
let Address2 = new MultiAdress1("Mazgoan", "Mumbai"); 
console.log(areEqual(Address1 ,Address2));
console.log(areSame(Address1 ,Address2));
function MultiAdress1(street, city){
    this.street = street,
    this.city = city;
}
function areEqual(Address1 ,Address2){
    return Address1.street === Address2.street && 
    Address1.city === Address2.city;  
 }
function areSame(Address1 ,Address2){
   return Address1 === Address2; 
}
