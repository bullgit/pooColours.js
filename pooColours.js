function pooColour() {
	var typeColour = Math.floor((Math.random() * 7) + 1);
	var colour = "#";
	switch(typeColour) {
		case 1:
			colour += addABit("4D");
			colour += addABit("33");
			colour += addABit("18");
			break;
		case 2:
			colour += addABit("33");
			colour += addABit("22");
			colour += addABit("0D");
			break;
		case 3:
			colour += addABit("89");
			colour += addABit("57");
			colour += addABit("35");
			break;
		case 4:
			colour += addABit("28");
			colour += addABit("12");
			colour += addABit("02");
			break;
		case 5:
			colour += addABit("55");
			colour += addABit("38");
			colour += addABit("18");
			break;
		case 6:
			colour += addABit("BB");
			colour += addABit("96");
			colour += addABit("12");
			break;
		case 7:
			colour += addABit("79");
			colour += addABit("4D");
			colour += addABit("1D");
			break;
	}
	return colour;
}

function addABit(toWhat) {
	var randomPermutation = Math.floor((Math.random()*4)-2);
	var toAdd = parseInt(toWhat,16);
	toAdd += randomPermutation;
	if (toAdd <= 9) {
		return "0"+toAdd.toString(16);
	} else {
		return toAdd.toString(16);
	}
}