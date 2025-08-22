import { createFileRoute } from "@tanstack/react-router";
import CharacterInfo from "../components/CharacterInfo";

export const Route = createFileRoute("/characterinfo")({
  component: () => (
    
      <CharacterInfo />
   
  ),
  validateSearch: (search: Record<string, unknown>) => {
    return {
      id: String(search.id ?? ''),
    }
  },
});