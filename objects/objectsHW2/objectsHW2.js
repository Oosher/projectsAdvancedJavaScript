function maxNumber(numbers) {

    maxnumber= numbers[0];

    for (let i = 0; i < numbers.length; i++) {
            if (numbers[i]>maxnumber) {

                maxnumber =numbers[i];
                
            
        }
        
    }
    return maxnumber;
    
}





let numbersArr = [1,22,3323,434,545,656,67,675,8758,786,7868,678,7686877,7686,555,78787];


console.log(maxNumber(numbersArr));





function Driver(firstName,lastName,dateOfBirth,salaryPerHour) {
    this.firstName=firstName;
    this.lastName=lastName
    this.dateOfBirth=dateOfBirth;
    this.salaryPerHour=salaryPerHour;
        
}







function driverSalary(driver, hours) { 
    
return driver.salaryPerHour*hours;

}




const newDriver =new Driver("yosef","simonove","23/03/1984",40);

console.log( driverSalary(newDriver,225));