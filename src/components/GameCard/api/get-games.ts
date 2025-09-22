import { Game } from "@/components/GameCard/GameCard";
import { apiFetch } from "@/services/api-fetch";

interface GetGamesResponse {
  items: Game[]
  count: number
}

interface GetGamesProps {
  search?: string
  pageNumber?: string
  pageSize?: string
}

export const getGames = async ({search, pageNumber, pageSize = '100'}: GetGamesProps = {}) => {
  try {
    const response = await apiFetch<GetGamesResponse>('/en/games', {
      searchParams: {
        pageSize,
        search,
        pageNumber
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