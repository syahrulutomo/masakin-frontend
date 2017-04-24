import { MasakinFrontendPage } from './app.po';

describe('masakin-frontend App', () => {
  let page: MasakinFrontendPage;

  beforeEach(() => {
    page = new MasakinFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
