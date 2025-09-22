import { apiFetch } from "@/services/api-fetch";

interface GetGamesByCategoryProps {
  search?: string
  pageNumber?: string
  pageSize?: string
  url?: string
}

interface GetGamesByCategoryResponse {
  meta: Record<string, unknown>
  components: {
    games: {
      gameText: string
      image: {
        alt: string
        thumbnail: {
          src: string
        }
      }
      id: string
    }[]
  }[]
}


export const getGamesByCategory = async ({ search, pageNumber, pageSize, url }: GetGamesByCategoryProps) => {
  try {
    const response = await apiFetch<GetGamesByCategoryResponse>('', {
      searchParams: {
        pageSize,
        search,
        pageNumber
      },
      baseUrl: url
    })

    return {
      data: response?.data
    }

  } catch {
    return {
      error: 'Error loading games by category',
      data: undefined
    }
  }
}