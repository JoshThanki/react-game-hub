import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/APIClient";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const genresService = new APIClient<Genre>("/genres");

export const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => genresService.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results:genres, next: null}
  });
    