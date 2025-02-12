//Hierzu brauchen wir die Klassen: Series (= Serie), Episode (=Episode) und Actor (=Darsteller:in)

//Es besteht folgender Zusammenhang
//- Serien haben Episoden
//- Episoden haben Darsteller:innen

export class Actor {
	firstName: string;
	lastName: string;
	birthday: Date;
	gender?: string;
	constructor(
		firstName: string,
		lastName: string,
		birthday: Date,
		gender: string
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
		this.gender = gender;
	}
}

export class Episode {
	title: string;
	length: number;
	description: string;
	actors: Actor[];
	constructor(
		title: string,
		length: number,
		description: string,
		actors: Actor[]
	) {
		this.title = title;
		this.length = length;
		this.description = description;
		this.actors = actors;
	}
}
