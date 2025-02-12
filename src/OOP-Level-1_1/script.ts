import { IceCreamFlavor } from "./IceCream";

//OOP-Class-TS-Level-1_1
const vanille = new IceCreamFlavor("Vanille", 1.2, true);
const choco = new IceCreamFlavor("Choco", 1.2, true);
const strawberry = new IceCreamFlavor("Strawberry", 1.3, false);
const yoghurt = new IceCreamFlavor("Yoghurt", 1.5, true);

const ice: IceCreamFlavor[] = [vanille, choco, strawberry, yoghurt];
