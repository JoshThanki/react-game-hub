import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {Platform } from "../data/types";
import APIClient, { FetchResponse } from "../services/APIClient";
import ms from "ms";
import useGameQueryStore from "./useGameQueryStore";


export interface Game {
    slug: string;
    id: number;
    name: string;
    description_raw: string;
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



export const useGames = () => {
  const {gameQuery} = useGameQueryStore();
  return useInfiniteQuery<FetchResponse<Game>, Error>({


    
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1}) => gamesService.getAll({
      params: {
        genres: gameQuery.genreId, 
        parent_platforms: gameQuery.platformId, 
        ordering: gameQuery.sortOrder, 
        search: gameQuery.searchText,
        page:pageParam,
        _start: (pageParam -1) * 10,
        _limit: 10 
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h")
  })}
