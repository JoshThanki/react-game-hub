import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
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

// export const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
//   queryKey: ["games", gameQuery],
//   queryFn: () => gamesService.getAll({params: {
//     genres: gameQuery.genre?.id, 
//     parent_platforms: gameQuery.platform?.id, 
//     ordering: gameQuery.sortOrder, search: 
//     gameQuery.searchText
//   }})
// })



export const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => gamesService.getAll({
      params: {
        genres: gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id, 
        ordering: gameQuery.sortOrder, 
        search: gameQuery.searchText,
        page:pageParam,
        _start: (pageParam -1) * gameQuery.pageSize,
        _limit: (gameQuery.pageSize) 
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000 //24h
  });
