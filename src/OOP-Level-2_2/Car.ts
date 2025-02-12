//Erstelle eine Klasse Car mit folgenden Eigenschaften:
//Überlege dir sinnvolle Datentypen für die Eigenschaften.

export class Car {
	brand: string = "";
	constructionYear: string = "";
	currentSpeed: number = 0;

	constructor(brand: string, constructionYear: string, currentSpeed: number) {
		this.brand = brand;
		this.constructionYear = constructionYear;
		this.currentSpeed = currentSpeed;
	}
}

//Erstelle eine separate Klasse Driver mit folgenden Eigenschaften:

export class Driver {
	firstName: string = "";
	lastName: string = "";
	age: number = 18;
	car: Car;
	constructor(firstName: string, lastName: string, age: number, car: Car) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.car = car;
	}
}
