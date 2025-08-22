
import { queryClient } from "./queryClient";
import { getCharacters, getCharacter } from "../servicelibs/getRickandMorty";
import type { Character, ApiListResponse } from "../types/rickMortyType";
import { CHARACTER, CHARACTERS } from "../constant";


export async function prefetchCharacters(page: number) {
  try {
    await queryClient.prefetchQuery<ApiListResponse<Character>>({
      queryKey: [CHARACTERS, page],
      queryFn: () => getCharacters(page),
    });
  } catch (err) {
    console.error("Error prefetching characters:", err);
  }
}


export async function prefetchCharacter(id: number) {
  try {
    await queryClient.prefetchQuery<Character>({
      queryKey: [CHARACTER, id],
      queryFn: () => getCharacter(id),
    });
  } catch (err) {
    console.error("Error prefetching character:", err);
  }
}


export async function initializePrefetch() {
  
  await Promise.all([prefetchCharacters(1)]); 
}
