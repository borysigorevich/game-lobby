import { Game } from "@/components/GameCard/GameCard";
import { apiFetch } from "@/services/api-fetch";

interface GetGamesResponse {
  items: Game[]
  count: number
}

export const getGames = async () => {
  try {
    const response = await apiFetch<GetGamesResponse>('/en/games', {
      searchParams: {
        pageSize: '100'
      }
    })

    return {
      data: response?.data
    }

  } catch {
    return {
      data: { items: [], count: 0 },
    }
  }
}