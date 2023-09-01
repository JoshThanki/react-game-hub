import { Platform } from "./Platform";


export interface Game {
    slug: string;
    id: number;
    name: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    genreId: { id: number; }[];
    rating_top: number;


}
