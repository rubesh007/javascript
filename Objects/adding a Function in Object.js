/* Adding a Function in Object */
// we can directly use the function inside the object
let Bat = {
    Brand: "KokaBurra",
    Type: "Strich Ball",
    Color: "Green",
    price: 1200,
    onlinePrice () {
        return this.price + 300; //  here the this KeyWord Referrs to the current object {this.price} => bat.price
        // or else we can also able to send parameter if we dont want to use the { this } KeyWord
    }
};

console.log( Bat.onlinePrice() ); // we want to call the function which is inside the object Bat

/* or else we can also able to send parameter if we dont want to use the { this } KeyWord  */
/* 
    onlinePrice (price) {
        return price + 300; //  here the this KeyWord Referrs to the current object {this.price} => bat.price
        // or else we can also able to send parameter if we dont want to use the { this } KeyWord
    }
    console.log( Bat.onlinePrice(1200) );
*/