console.log("SecureRig Security System");
var user = process.argv.slice(2);
var password = process.argv.slice(3);
var good = false;
if (user == [ 'jeremy', 'nielsen' ]) {
	if (password == [ 'nielsen' ]) {
		good = true;
	} else {
		good = false;
	};
};	
if (good == true) {
	console.log('Logged in:', user);
} else {
	console.log('Authentication failed. Run the program again.');
};
console.log(user);
console.log(password);
