import { AppnavModule } from './appnav.module';

describe('AppnavModule', () => {
  let appnavModule: AppnavModule;

  beforeEach(() => {
    appnavModule = new AppnavModule();
  });

  it('should create an instance', () => {
    expect(appnavModule).toBeTruthy();
  });
});
