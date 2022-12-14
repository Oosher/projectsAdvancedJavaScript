
import account from"./user.js";//import the default export from the other file the name dose not matter when using export default

import { hello as shalom , age } from "./user.js";



//option 2 
//import account { hello as shalom , age } from "./user.js"; //default can be added in front of the brackets

import { allCrypto } from "./cripto.js";

let myUser = new account("toshi ba",2313231);


console.log(myUser);

shalom();

console.log(age);

/* allCrypto.biggestCoinRise();

allCrypto.lowestDroppedCoin(); */

allCrypto.biggestChange();