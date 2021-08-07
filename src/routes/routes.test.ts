import RoutesConfig from './routes-config';
import Routes from './routes';

describe('Router test', () => {
  it('Should test how many routes are', () => {
    expect(RoutesConfig.length).toEqual(2);
    expect(Routes().props.children).toBeDefined();
  });
});
