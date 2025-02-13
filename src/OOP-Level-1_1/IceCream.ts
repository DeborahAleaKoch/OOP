//Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
//Die Klasse soll folgende Attribute haben

//name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined
export class IceCreamFlavor {
	name: string = "";
	price: number = 0;
	isPopular: boolean = false;
	description?: string = undefined;

	constructor(
		name: string,
		price: number,
		isPopular: boolean,
		description?: string
	) {
		if (description) {
			this.description = description;
		}
		if (isPopular === true) {
			console.log(name);
		}
		this.name = name;
		this.price = price;
		this.description = description;
		this.isPopular = isPopular;
	}
}
