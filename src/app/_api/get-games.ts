import { apiFetch } from "@/services/api-fetch";

export interface Game {
  id: string
  meta: {
    name: string
    category: string
  }
  media: {
    thumbnail: {
      thumbnail: {
        src: string
      }
    }
  }
}

export interface GetGamesResponse {
  items: Game[]
  count: number
}

interface GetGamesProps {
  search?: string
  pageNumber?: string
  pageSize?: string
}

export const getGames = async ({ search, pageNumber, pageSize = '100' }: GetGamesProps = {}) => {
  return await apiFetch<GetGamesResponse>('/en/games', {
    searchParams: {
      pageSize,
      search,
      pageNumber
    }
  })
}