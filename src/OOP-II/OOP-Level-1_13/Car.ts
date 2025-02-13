enum CarTypes {
	"Unknown",
	"Sedan",
	"Coupe",
	"Convertible",
	"Hatchback",
	"Truck",
}

export class Car {
	brand: string = "";
	_constructionYear: string = "";
	currentSpeed: number = 0;
	_carType: CarTypes;

	constructor(
		brand: string,
		constructionYear: string,
		currentSpeed: number,
		carType: CarTypes
	) {
		this.brand = brand;
		this._constructionYear = constructionYear;
		this.currentSpeed = currentSpeed;
		this._carType = carType;
	}
	//soll constructionYear nur über den Konstruktor gesetzt werden können
	//→ Wert ist nur über einen Getter (get-Methode) abrufbar
	getConstructionYear(): number {
		return Number(this._constructionYear);
	}

	//soll es eine Methode getSpeedInfo(): string geben mit dieser Logik geben
	getSpeedInfo(): string {
		if (this.currentSpeed <= 40) {
			console.log("Driving slowly");
			return "Driving slowly";
		}
		if (this.currentSpeed > 40 && this.currentSpeed <= 70) {
			console.log("Driving normally");
			return "Driving normally";
		}
		if (this.currentSpeed > 70 && this.currentSpeed <= 120) {
			console.log("Driving fast");
			return "Driving fast!";
		}
		if (this.currentSpeed > 120 && this.currentSpeed <= 190) {
			console.log("Driving really fast");
			return "driving realy fast";
		} else {
			console.log("WTF");
			return "WTF";
		}
	}
}

//Erstelle eine separate Klasse Driver mit folgenden Eigenschaften:

export class Driver {
	firstName: string = "";
	lastName: string = "";
	age: number = 18;
	car: Car;
	licenseFromYear: number;
	constructor(
		firstName: string,
		lastName: string,
		age: number,
		car: Car,
		licenseFromYear: number
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.car = car;
		this.licenseFromYear = licenseFromYear;
	}

	getLicenseFromYear() {
		return this.licenseFromYear;
	}

	getCarType(): CarTypes {
		return this.car._carType;
	}
}
