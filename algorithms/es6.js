  
function addressMaker(address) {

	const {city, state} = address;

	const newAddress = {
		city,
		state
	};

	console.log(`${newAddress.city} ${newAddress.state}`);

}

addressMaker({city: 'Austin', state: 'Texas'});