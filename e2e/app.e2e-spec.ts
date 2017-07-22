import { RocketStatsPage } from './app.po';

describe('rocket-stats App', () => {
  let page: RocketStatsPage;

  beforeEach(() => {
    page = new RocketStatsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
