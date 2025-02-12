// Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
//Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”

//Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
//die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt

export class SchoolClass {
	id: number = 0;
	name: string = "";
	endDate?: Date = undefined;

	constructor(id: number, name: string) {
		console.log("School class creation successful!");
		this.id = id;
		this.name = name;
	}
}
