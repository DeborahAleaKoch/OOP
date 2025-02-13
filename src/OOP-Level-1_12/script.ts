//Wir bauen auf der Klasse IceCreamFlavors @OOP-Class-TS-Level-1_1 auf

//Die Klasse soll drei Methoden bekommen

export class IceCreamFlavor {
	_name: string = "";
	_price: number = 0;
	_isPopular: boolean = false;
	_description?: string = undefined;

	constructor(
		name: string,
		price: number,
		isPopular: boolean,
		description?: string
	) {
		if (description) {
			this._description = description;
		}
		if (isPopular === true) {
			console.log(name);
		}
		this._name = name;
		this._price = price;
		this._isPopular = isPopular;
		this._description = description;
	}

	//getTotalPrice(numberOfScoops: number)
	//→ gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus
	getTotalPrice(numberOfScoops: number): void {
		const totalPrice = numberOfScoops * this._price;
		console.log(
			`The total price for ${numberOfScoops} scoops of ${
				this._name
			} is : ${totalPrice.toFixed(1)} €.`
		);
	}

	//printInfo()
	// → gibt z. B. Folgendes auf der Konsole aus -> 'Flavor Vanilla is popular and costs 2.10 Euro.'
	printInfo(): void {
		if (this._isPopular === true)
			console.log(
				`The Flavor ${this._name} is popular an costs ${this._price} €.`
			);
	}
	//getLengthOfDescription()
	//→ gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist
	getLengthOfDescription(): number {
		return this._description ? this._description.length : 0;
	}
}

const vanille = new IceCreamFlavor("Vanille", 1.2, true, "lecker");
// const choco = new IceCreamFlavor("Choco", 1.2, true);
// const strawberry = new IceCreamFlavor("Strawberry", 1.3, false);

vanille.getTotalPrice(3);
vanille.printInfo();
