import { usePlatforms } from "./usePlatforms";

export const usePlatform = (id:number|undefined) => {

  const { data } = usePlatforms();

  const selectedObj = data?.results.find(
    (obj) => obj.id === id
  );

  return selectedObj
}