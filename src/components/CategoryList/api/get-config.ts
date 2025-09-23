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
  return await apiFetch<GetConfigResponse>('/config')
}