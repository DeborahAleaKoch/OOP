//Ein Serie hat folgende Eigenschaften:

import { Episode } from "./Episode";

export class Serie {
	title: string = "";
	description: string = "";
	startYear: number = 0;
	endYear: number = 0;
	episodes: Episode[];
	constructor(
		title: string,
		description: string,
		startYear: number,
		endYear: number,
		episodes: Episode[]
	) {
		this.title = title;
		this.description = description;
		this.startYear = startYear;
		this.endYear = endYear;
		this.episodes = episodes;
	}
}
