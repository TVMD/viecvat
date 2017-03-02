import { ViecvatPage } from './app.po';

describe('viecvat App', function() {
  let page: ViecvatPage;

  beforeEach(() => {
    page = new ViecvatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
