var john={
	fullName:'John Smith',
	Height:1.35,
	Mass:78,
	calculateBMI: function()// Calulate BMI of both
	{
		return this.Mass/(this.Height*this.Height);
	}
};

var johnBMI=john.calculateBMI();
console.log('john Details');
console.log('----------------------');
console.log("Full Name : "+john['fullName']);
console.log("BMI of John : "+johnBMI);

var mark={
	fullName:'Mark mary',
	Height:1.80,
    Mass:82,
    calculateBMI: function()// Calulate BMI of both
	{
		return this.Mass/(this.Height*this.Height);
	}

}

var markBMI=mark.calculateBMI();
console.log('john Details');
console.log('----------------------');
console.log("Full Name:"+mark['fullName']);
console.log("BMI of Mark:"+markBMI);

//Condition for check whos bmi is large

if(johnBMI < markBMI)
{
	console.log("mark's BMI Higher than John:"+markBMI);
}
else if(johnBMI > markBMI)
{
	console.log("John BMI Higher than mark:"+johnBMI);
}
else
{
    console.log("Both Have Same BMI");
}
