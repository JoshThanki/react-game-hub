import { useGenres } from "./useGenres";

export const useGenre = (id:number|undefined) => {

  const { data } = useGenres();

  const selectedObj = data?.results.find(
    (obj) => obj.id === id
  );

  return selectedObj
}
