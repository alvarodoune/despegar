import { DespegarTestPage } from './app.po';

describe('despegar-test App', function() {
  let page: DespegarTestPage;

  beforeEach(() => {
    page = new DespegarTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
