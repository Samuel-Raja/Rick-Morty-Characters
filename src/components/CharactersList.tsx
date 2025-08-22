
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "./../servicelibs/getRickandMorty";
import type { Character, ApiListResponse } from "./../types/rickMortyType";
import { CHARACTERS } from "./../constant";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import { useSearch } from "@tanstack/react-router";

export default function CharactersList() {
 
   const { page = 1 } =  useSearch({ from: '/characters' });

  const { data, isLoading, isError } = useQuery<ApiListResponse<Character>>({
    queryKey: [CHARACTERS, page],
    queryFn: () => getCharacters(page),
    
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading characters</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Rick and Morty Characters</h1>
      <div className="grid grid-cols-3 gap-4">
        {data?.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination
        currentPage={page as number}
        totalPages={data?.info.pages ?? 1}
        
      />
    </div>
  );
}
