import { Game } from "@/components/GameCard/GameCard";
import { apiFetch } from "@/services/api-fetch";

interface GetGamesResponse {
  items: Game[]
  count: number
}

interface GetGamesProps {
  search?: string
}

export const getGames = async ({search}: GetGamesProps = {}) => {
  try {
    const response = await apiFetch<GetGamesResponse>('/en/games', {
      searchParams: {
        pageSize: '100',
        search
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