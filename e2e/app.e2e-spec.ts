import { BookShopPage } from './app.po';

describe('book-shop App', () => {
  let page: BookShopPage;

  beforeEach(() => {
    page = new BookShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
