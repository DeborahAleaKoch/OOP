import { Car, Driver } from "./Car";

//Zu guter Letzt sollst du in der Datei app.ts, mehrere Autos und Fahrer erstellen und miteinander verknüpfen

const car1 = new Car("KIA", "2023", 0);
const car2 = new Car("Polestar", "2024", 205);
const car3 = new Car("Seat", "2015", 35);

const driver1 = new Driver("Debo", "Ko", 34, car1);
const driver2 = new Driver("Janek", "Ro", 31, car2);
console.log(driver1);
