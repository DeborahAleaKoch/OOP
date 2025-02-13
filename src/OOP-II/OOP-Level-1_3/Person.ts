//Definiere eine weitere Klasse Person, die die Eigenschaften name (string), birthday (Date) und gender (Enum) enthält.

enum Gender {
	"female",
	"male",
	"divers",
}

export class Person {
	private _name: string = "";
	private _birthday?: Date = undefined;
	private _gender: Gender;

	//Implementiere Get- und Set-Methoden für name und gender, birthday soll im Konstruktor gesetzt werden und ansonsten nur eine Get-Methode haben.

	constructor(name: string, gender: Gender, birthday: Date) {
		if (birthday) {
			this._birthday = birthday;
		}
		this._name = name;
		this._gender = gender;
	}
	getBirthday() {
		return this._birthday;
	}

	getName(): string {
		return this._name;
	}
	set name(name: string) {
		this._name = name;
	}

	getGender(): Gender {
		return this._gender;
	}

	set gender(entry: Gender) {
		this._gender = entry;
	}
}
