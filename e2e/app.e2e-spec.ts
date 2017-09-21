import { SDKUIPage } from './app.po';

describe('sdkui App', function() {
  let page: SDKUIPage;

  beforeEach(() => {
    page = new SDKUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
