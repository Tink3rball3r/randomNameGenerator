let first = ['Andy', 'Anthony', 'Bret', 'Barry', 'Bart', 'Chad', 'Charlse', 'Stan', 'Bill', 'Stan', 'Kevin', 'Keith', 'Sammy', 'Luke', 'John', 'Eddy', 'Tom', 'Tim', 'Prince'];
let middle = ['Ace', 'August', 'Clyde', 'Gus', 'Hank', 'Hugh', 'Jude', 'Louis', 'Sonny', 'Theo', 'Beckham', 'Cooper', 'Ellis', 'Emerson', 'Fletcher', 'Harrison', 'Hendrix', 'Lennon', 'Monroe'];
let last = [
	'Smith',
	'Johnson',
	'Williams',
	'Brown',
	'Jones',
	'Garcia',
	'Miller',
	'Davis',
	'Rodriguez',
	'Anderson',
	'Thomas',
	'Taylor',
	'Jackson',
	'Martin',
	'Lee',
	'White',
	'Harris',
	'Clark',
	'Young',
];

function generateName() {
	let rand1 = Math.floor(Math.random() * first.length);
	let rand2 = Math.floor(Math.random() * middle.length);
	let rand3 = Math.floor(Math.random() * last.length);
	document.getElementById('name-el').innerHTML = first[rand1] + ' ' + middle[rand2] + ' ' + last[rand3];
}
