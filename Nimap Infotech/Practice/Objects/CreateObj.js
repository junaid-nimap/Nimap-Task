let Address = { street: 'Mazgoan', 
    city: 'Mumbai', 
    Zipcode: 400010 };
function ShowAddress(Address){
    for (let key in Address){
        console.log(key, Address[key]);
    }
}
ShowAddress(Address);