import { BugtrackerPage } from './app.po';

describe('bugtracker App', () => {
  let page: BugtrackerPage;

  beforeEach(() => {
    page = new BugtrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
