import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { Platform } from "../entities/Platform";
import APIClient from "../services/APIClient";
import ms from "ms";

const platformsService = new APIClient<Platform>("/platforms");

export const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => platformsService.getAll(),
    staleTime: ms("24h"),
    initialData: {count: platforms.length, results:platforms, next: null}
  });

