import { TestFormPage } from './app.po';

describe('test-form App', () => {
  let page: TestFormPage;

  beforeEach(() => {
    page = new TestFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
