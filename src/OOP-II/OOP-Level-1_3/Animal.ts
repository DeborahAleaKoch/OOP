// Definiere eine Klasse Animal
//sie soll die Eigenschaften species (string), age (number) und color (string) enthalten

export class Animal {
	_species: string = "";
	_age: number = 1;
	_color: string = "";
	// constructor(species: string, age: number, color: string) {
	// 	this._species = species;
	// 	this.age = age;
	// 	this.color = color;
	// }

	//Implementiere Get- und Set-Methoden für jede Eigenschaft.
	get species(): string {
		return this._species;
	}
	get age(): number {
		return this._age;
	}
	get color(): string {
		return this._color;
	}

	set species(name: string) {
		this._species = name;
	}

	set age(value: number) {
		if (value <= 0) {
			throw new Error("The animal is not born  yet");
		}
		this._age = value;
	}
	set color(colorName: string) {
		this._color = colorName;
	}
}
