import { useQuery } from '@tanstack/react-query';
import { getCharacter } from './../servicelibs/getRickandMorty';
import { CHARACTER } from './../constant';
import type { Character } from './../types/rickMortyType';
import { useSearch } from '@tanstack/react-router';

const CharacterInfo = () => {
 
  const { id } = useSearch({ from: '/characterinfo' });

  const { data: character, isLoading, isError } = useQuery<Character>({
    queryKey: [CHARACTER, id],
    queryFn: () => (id ? getCharacter(Number(id)) : Promise.reject('No ID')),
    enabled: !!id,
  });

  if (!id) return <p>No character ID provided.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading character</p>;

  return (
    <div className="border rounded-lg shadow-md p-4 text-center">
      <img
        src={character?.image}
        alt={character?.name}
        className="w-44 h-44 mx-auto rounded-full"
      />
      <h2 className="mt-2 text-xl font-semibold">{character?.name}</h2>
      <p className="text-gray-600">Status: {character?.status}</p>
      <p className="text-gray-600">Species: {character?.species}</p>
      <p className="text-gray-600">Gender: {character?.gender}</p>
    </div>
  );
};

export default CharacterInfo;
