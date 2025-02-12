//Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden

import { Person } from "../OOP-Level-2_1/Person";
import { SchoolClass } from "./SchoolClass";

const personArray = [1, 2, 3, 4].map(
	(number) => new Person(number, `Otto${number}`, `Schnuff${number}`, "gestern")
);
const schoolClass1 = new SchoolClass(1, "1a", personArray);
const schoolClass2 = new SchoolClass(2, "2b", []);
const schoolClass3 = new SchoolClass(3, "3c", personArray);

//Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

schoolClass1.name = "Kunst";
console.log(schoolClass1.persons);

schoolClass2.name = "Sport";
console.log(schoolClass2);
