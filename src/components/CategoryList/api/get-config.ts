import { Category } from "@/components/CategoryList/CategoryList";
import { apiFetch } from "@/services/api-fetch";

interface GetConfigResponse {
  menu: {
    lobby: {
      items: Category[]
    }
  }
}

export const getConfig = async () => {
  try {
    const response = await apiFetch<GetConfigResponse>('/config')

    return {
      data: response?.data
    }
  } catch {
    return {
      error: 'Error loading categories',
    }
  }
}