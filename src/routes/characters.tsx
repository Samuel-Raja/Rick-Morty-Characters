// routes/characters.tsx
import { createFileRoute } from '@tanstack/react-router'
import CharactersList from '../components/CharactersList'
import { z } from 'zod'

export const Route = createFileRoute('/characters')({
  validateSearch: z.object({
    page: z.coerce.number().catch(1).transform((val) => Math.max(val, 1))
  }),
  component: CharactersPage,
})

function CharactersPage() {
  return (
      <CharactersList />
  )
}
