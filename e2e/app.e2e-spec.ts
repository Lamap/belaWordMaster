import { BelaWordMasterPage } from './app.po';

describe('bela-word-master App', function() {
  let page: BelaWordMasterPage;

  beforeEach(() => {
    page = new BelaWordMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
