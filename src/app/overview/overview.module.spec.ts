import { OverviewModule } from './overview.module';

describe('OverviewModule', () => {
  let overviewModule: OverviewModule;

  beforeEach(() => {
    overviewModule = new OverviewModule();
  });

  it('should create an instance', () => {
    expect(overviewModule).toBeTruthy();
  });
});
