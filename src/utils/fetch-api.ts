interface FetchApi {
  method?: string;
  headers?: any;
  body?: any;
}

export const fetchApi = (
  url: string,
  {
    method = 'GET',
    headers = {
      'content-type': 'application/json; carset=utf-8'
    },
    body
  }: FetchApi
): Promise<any> => {
  return Promise.race([
    fetch(url, {
      body,
      headers,
      method
    }).then((response) => response.json()),
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error('fetchApi timeout error')),
        5000
      )
    )
  ]);
};

export default fetchApi;
