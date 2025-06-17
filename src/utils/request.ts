// 核心请求方法
const request = async <T = unknown>(
  url: string,
  config: RequestInit = {}
): Promise<{ data: T; ok: boolean; status: number }> => {
  // 使用当前location作为host
  const fullURL = url.startsWith('http') ? url : `${location.origin}${url}`;

  const response = await fetch(fullURL, {
    headers: { 'Content-Type': 'application/json' },
    ...config,
  });

  let data: T;
  const contentType = response.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    data = await response.json();
  } else {
    data = (await response.text()) as unknown as T;
  }

  return { data, ok: response.ok, status: response.status };
};

// 便捷方法
export const get = <T = unknown>(url: string) => request<T>(url);

export const post = <T = unknown>(url: string, data?: unknown) =>
  request<T>(url, { method: 'POST', body: JSON.stringify(data) });

export const put = <T = unknown>(url: string, data?: unknown) =>
  request<T>(url, { method: 'PUT', body: JSON.stringify(data) });

export const del = <T = unknown>(url: string) =>
  request<T>(url, { method: 'DELETE' });
