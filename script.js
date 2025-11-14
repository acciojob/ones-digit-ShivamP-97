function onesDigit(n) {
	const num=Number(n);

	if(!Number.isInteger(num)||num<=0){
		throw new Error("Input must be a positive integer.");
	}
	return num%10;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
