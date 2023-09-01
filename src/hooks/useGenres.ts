import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/APIClient";
import ms from 'ms';
import { Genre } from "../entities/Genre";

const genresService = new APIClient<Genre>("/genres");

export const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => genresService.getAll(),
    staleTime: ms("24h"),
    initialData: {count: genres.length, results:genres, next: null}
  });
    