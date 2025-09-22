import { Category } from "@/components/CategoryList/CategoryList";
import { apiFetch } from "@/services/api-fetch";

interface GetCategoriesResponse {
  menu: {
    lobby: {
      items: Category[]
    }
  }
}

export const getCategories = async () => {
  try {
    const response = await apiFetch<GetCategoriesResponse>('/config')

    return {
      data: response?.data
    }
  } catch {
    return {
      error: 'Error loading categories',
    }
  }
}