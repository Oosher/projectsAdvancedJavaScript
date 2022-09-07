function FixCompute (x,y,operator){
    this.x=x;
    this.y = y;
    this.operator = operator;

    //a different way of naming  a function
    this.compute = ()=>{
        
     switch (this.operator) {

        case "+":
            return this.x + this.y;
        case "-":
            return this.x - this.y;
        case "*":
            return this.x * this.y;
        case "/":
            return this.x / this.y;
        default:
            break;
     }

    }

this.printExpression =()=>{

 return this.x + " " + this.operator +" " + this.y + " = " +  this.compute(); 

}
}

const newCompute = new FixCompute(4,5,"*");

console.log(newCompute.compute()); 


 newCompute.printExpression();
 document.write = newCompute.printExpression();

//user Calculation part



 document.querySelector("#calc").addEventListener("click",()=>{
const newCompute2 = new FixCompute();
newCompute2.x = Number(document.querySelector("#firstNumber").value);
newCompute2.y = Number(document.querySelector("#secondNumber").value);
newCompute2.operator = document.querySelector("#operator").value;
const result = document.querySelector("#result");


 console.log(firstNumber,secondNumber,operator);
 result.innerHTML= newCompute2.printExpression();
   
 })