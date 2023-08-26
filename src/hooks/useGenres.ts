import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "../data/types";

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


export const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results:genres}
  });
    