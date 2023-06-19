const NEW_TASK = 'Nova tarefa'
const sleep = t => new Promise(res => setTimeout(res, t));

describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should show logo of the app', async () => {
    const logo = await element(by.id('logoId'));
  
    await expect(logo).toBeVisible();
  });

  it('Should add one task', async () => {
    const input = await element(by.id('home-input-id'));
    const addButton = await element(by.id('button-add'));

    await input.typeText('Nova tarefa');
    await addButton.tap();

    const task = await element(by.text(NEW_TASK));

    await expect(task).toBeVisible();
  });

  it.only('Should remove one task', async () => {
    const input = await element(by.id('home-input-id'));
    const addButton = await element(by.id('button-add'));

    await input.typeText(NEW_TASK);
    await addButton.tap();

    const removeButton = await element(by.id('button-delete'));
    console.log('remove button', removeButton)
    await removeButton.tap();
  });

});
