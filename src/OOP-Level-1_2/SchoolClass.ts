// Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
//Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”

import { Person } from "../OOP-Level-2_1/Person";

//Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
//die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt

export class SchoolClass {
	id: number = 0;
	name: string = "";
	endDate?: Date = undefined;
	persons: Person[];

	constructor(id: number, name: string, persons: Person[]) {
		console.log("School class creation successful!");
		this.id = id;
		this.name = name;
		this.persons = persons;
	}
}

// a) Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften:
