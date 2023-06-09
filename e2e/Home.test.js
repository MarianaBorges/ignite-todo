describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show logo of app', async () => {
    const logo = element(by.id('HomeScreen'));

    await expect(logo).toBeVisible();
  });
});
