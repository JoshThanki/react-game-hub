import { useGenres } from "./useGenres";

export const useGenre = (id:number) => {

  const { data } = useGenres();

  const selectedObj = data?.results.find(
    (obj) => obj.id === id
  );

  return selectedObj
}
