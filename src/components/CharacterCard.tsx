import type { Character } from "./../types/rickMortyType";
import { Link } from '@tanstack/react-router'

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link
      to="/characterinfo"
      search={{ id: character.id as string }}
      className="block border rounded-lg shadow-md p-2 text-center hover:shadow-lg transition"
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-44 h-44 mx-auto rounded-full"
      />
      <p className="mt-2 font-medium">{character.name}</p>
    </Link>
  );
}
