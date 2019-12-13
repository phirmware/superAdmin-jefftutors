import { RechargecodesModule } from './rechargecodes.module';

describe('RechargecodesModule', () => {
  let rechargecodesModule: RechargecodesModule;

  beforeEach(() => {
    rechargecodesModule = new RechargecodesModule();
  });

  it('should create an instance', () => {
    expect(rechargecodesModule).toBeTruthy();
  });
});
