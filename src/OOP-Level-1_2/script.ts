//Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden

import { SchoolClass } from "./SchoolClass";

const schoolClass1 = new SchoolClass(1, "1a");
const schoolClass2 = new SchoolClass(2, "2b");
const schoolClass3 = new SchoolClass(3, "3c");

//Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

schoolClass1.name = "Kunst";
console.log(schoolClass1);

schoolClass2.name = "Sport";
console.log(schoolClass2);
