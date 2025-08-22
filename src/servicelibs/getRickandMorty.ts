import type { Character, ApiListResponse } from '../types/rickMortyType'
import { BASE_URL } from '../constant'



export async function getCharacters(page: number | string): Promise<ApiListResponse<Character>> {
  const res = await fetch(`${BASE_URL}/character?page=${page}`)
  if (!res.ok) throw new Error(`Failed to fetch characters (page ${page})`)
  return res.json()
}

export async function getCharacter(id: number): Promise<Character> {
  const res = await fetch(`${BASE_URL}/character/${id}`)
  if (!res.ok) throw new Error(`Failed to fetch character ${id}`)
  return res.json()
}
