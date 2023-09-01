import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { Game } from "../entities/Game";
import APIClient, { FetchResponse } from "../services/APIClient";
import useGameQueryStore from "../stores/useGameQueryStore";




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
