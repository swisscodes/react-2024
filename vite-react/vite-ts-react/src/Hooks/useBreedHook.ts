import { useState, useEffect } from "react";

interface ICache {
  [key: string]: [];
}
const localCache: ICache = { animal: [] };

function useBreedHook(animal: string): [[], string] {
  const [breedList, setBreedList] = useState<[]>([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreeList();
    }

    async function requestBreeList() {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}
        `
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}

export default useBreedHook;
