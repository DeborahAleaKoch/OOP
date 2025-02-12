//a) Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften:

export class Person {
	id: number;
	firstName: string;
	lastName: string;
	birthday: string;

	constructor(
		id: number,
		firstName: string,
		lastName: string,
		birthday: string
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
	}
}

const person1 = new Person(1, "Rossbert", "Janek", "");
