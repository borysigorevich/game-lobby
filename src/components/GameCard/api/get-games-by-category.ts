import { apiFetch } from "@/services/api-fetch";

interface GetGamesByCategoryProps {
  search?: string
  pageNumber?: string
  pageSize?: string
  url?: string
}

interface GetGamesByCategoryResponse {
  meta: { title: string }
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
  return await apiFetch<GetGamesByCategoryResponse>('', {
    searchParams: {
      pageSize,
      search,
      pageNumber
    },
    baseUrl: url
  })
}