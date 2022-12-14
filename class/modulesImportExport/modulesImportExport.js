
import account from"./user.js";//import the default export from the other file the name dose not matter when using export default

import { hello ,age} from "./user.js";

let myUser = new account("toshi ba",2313231);


console.log(myUser);

hello();

console.log(age);