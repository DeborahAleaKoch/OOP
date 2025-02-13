// Definiere eine Klasse Animal
//sie soll die Eigenschaften species (string), age (number) und color (string) enthalten

export class Animal {
	private _species: string = "";
	private _age: number = 1;
	private _color: string = "";
	// constructor(species: string, age: number, color: string) {
	// 	this._species = species;
	// 	this.age = age;
	// 	this.color = color;
	// }

	//Implementiere Get- und Set-Methoden für jede Eigenschaft.
	getSpecies(): string {
		return this._species;
	}
	getAge(): number {
		return this._age;
	}
	getColor(): string {
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
const foo = new Animal();
