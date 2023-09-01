import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/APIClient";
import { Game } from "./useGames";

const gamesService = new APIClient<Game>("/games");

const useGame = (slug: string) => useQuery({
    queryKey: ["games", slug],
    queryFn: () => gamesService.get(slug),
    staleTime: ms("24h")
})


export default useGame;