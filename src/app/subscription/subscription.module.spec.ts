import { SubscriptionModule } from './subscription.module';

describe('SubscriptionModule', () => {
  let subscriptionModule: SubscriptionModule;

  beforeEach(() => {
    subscriptionModule = new SubscriptionModule();
  });

  it('should create an instance', () => {
    expect(subscriptionModule).toBeTruthy();
  });
});
