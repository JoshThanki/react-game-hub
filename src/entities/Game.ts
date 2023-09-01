import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
    slug: string;
    id: number;
    name: string;
    genres: Genre[]
    description_raw: string;
    publishers: Publisher[]
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    genreId: { id: number; }[];
    rating_top: number;


}
