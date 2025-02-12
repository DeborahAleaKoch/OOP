//Schreibe eine Funktion printSeriesInfo(series: Series), die beispielhaft für eine Serie Folgendes auf der Konsole ausgibt.

import { Actor, Episode } from "./Episode";
import { Serie } from "./Serie";

//create Actors
const actor1 = new Actor("vorname1", "nachname1", new Date(2000), "female");
const actor2 = new Actor("vorname2", "nachname2", new Date(1960), "male");
const actor3 = new Actor("vorname3", "nachname3", new Date(1999), "female");

//create Episodes
const episodeNr1 = new Episode("Folge1", 30, "", [actor1, actor3]);
const episodeNr2 = new Episode("Folge2", 40, "hier passiert einiges", [actor2]);
const episodeNr3 = new Episode("Folge3", 30, "hier steht der Plot", [
	actor1,
	actor2,
	actor3,
]);

//create Series
const serie1 = new Serie(
	"Titel der Serie 1",
	"Beschreibung der Serie 1",
	2000,
	2005,
	[episodeNr1, episodeNr3, episodeNr2]
);

const serie2 = new Serie(
	"Titel der Serie 2",
	"Beschreibung der Serie 2",
	1999,
	2001,
	[episodeNr1]
);

const serie3 = new Serie(
	"Titel der Serie 3",
	"Beschreibund Serie 3",
	2020,
	2025,
	[episodeNr1, episodeNr2, episodeNr3]
);

const serieArray = [serie1, serie2, serie3];

function printSeriesInfo(serie: Serie) {
	const result = serieArray.map(() => {});
}
