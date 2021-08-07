import fetchApi from './fetch-api';

describe('FetchApi test', () => {
  const fetchParams = {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=1',
    method: 'GET'
  };

  it('Should fetch an api', async () => {
    const fetchResponse = await fetchApi(fetchParams);
    expect(fetchResponse.count).toEqual(1118);
  });
});
