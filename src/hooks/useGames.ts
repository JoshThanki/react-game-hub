import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import {Platform } from "../data/types";
import APIClient, { FetchResponse } from "../services/APIClient";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    genreId: {id: number}[];
    rating_top: number;
    
    
  }

const gamesService = new APIClient<Game>("/games");

export const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ["games", gameQuery],
  queryFn: () => gamesService.getAll({params: {
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id, 
    ordering: gameQuery.sortOrder, search: 
    gameQuery.searchText
  }})
    
  })
