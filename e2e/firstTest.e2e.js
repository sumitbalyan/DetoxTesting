describe('DettoxTest', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Login and Navigate to NewScreen', async () => {
    await element(by.id('userID')).tap();
    await element(by.id('userID')).typeText('test@test.com');
    await device.takeScreenshot('usename');

    await element(by.id('passID')).tap();
    await element(by.id('passID')).typeText('test@123');
    await device.takeScreenshot('password');

    await element(by.id('loginBtnID')).tap();

    await expect(element(by.text('New Screen'))).toBeVisible();
    await device.takeScreenshot('NewScreen');

  });

  // it('tap to "User name Text Input"', async () => {
  //   await expect(element(by.id('passID')).tap()).toHaveValue();
  // });


});
