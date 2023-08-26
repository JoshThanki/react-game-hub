import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import {Platform} from "../data/types";
import APIClient from "../services/APIClient";

const platformsService = new APIClient<Platform>("/platforms");

export const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformsService.getAll(),
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: {count: platforms.length, results:platforms}
  });

