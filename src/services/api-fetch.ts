export type ApiFetchOptions = RequestInit & {
  searchParams?: Record<string, string | undefined>;
  baseUrl?: string;
};

export type ApiFetchResponse<T> =
  | { data: T; error?: undefined; headers: Headers; status: number }
  | { data?: undefined; error: string; headers: Headers; status: number };

export type ApiFetchFn<Options extends ApiFetchOptions = ApiFetchOptions> = <T>(
  input: RequestInfo | URL,
  options?: Options | undefined
) => Promise<ApiFetchResponse<T>>;

export const API_BASE_URL = process.env.API_BASE_URL;

export const apiFetch: ApiFetchFn = async (input, options?) => {
  const baseUrl = options?.baseUrl || API_BASE_URL;

  const url = new URL(`${baseUrl}${input}`);

  if (options?.searchParams) {
    Object.entries(options.searchParams).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value);
    });
  }

  try {
    const response = await fetch(url.toString(), {
      ...options,
      headers: {
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok && (data?.message || data?.error)) {
      console.error(
        `method: ${options?.method || 'GET'}`,
        `Fetch failed with status ${response.status} (${response.statusText})`,
        'URL:',
        url.toString(),
        'Response:',
        data
      );
      return {
        error:
          data.message ||
          data.error ||
          `Error: ${response.status} ${response.statusText}`,
        headers: response.headers,
        status: response.status,
      };
    }

    return { data, headers: response.headers, error: undefined, status: response.status };
  } catch (error) {
    console.error('Error during fetch:', error, 'for URL:', url.toString());
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};
