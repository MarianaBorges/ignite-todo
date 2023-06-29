import { by, device, expect, element, waitFor } from 'detox';

const NEW_TASK = 'Nova tarefa'

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

    await input.typeText(NEW_TASK);
    await input.tapReturnKey();
    await addButton.tap();

    const task = await element(by.text(NEW_TASK));

    await expect(task).toBeVisible();
  });

  it('Should remove one task', async () => {
    const input = await element(by.id('home-input-id'));
    const addButton = await element(by.id('button-add'));

    await input.typeText(NEW_TASK);
    await input.tapReturnKey();
    await addButton.tap();

    const removeButton = await element(by.id('button-delete'));
    
    await removeButton.tap();

    //await expect(element(by.id('alert-modal'))).toExist();

    const confirmButton = await element(by.text('Sim'));

    await confirmButton.tap();

    await expect(element(by.text(NEW_TASK))).not.toBeVisible();
    await expect(element(by.text(NEW_TASK))).not.toExist();
  });

  it('Should finish one task', async () => {
    const input = await element(by.id('home-input-id'));
    const addButton = await element(by.id('button-add'));

    await input.typeText(NEW_TASK);
    await input.tapReturnKey();
    await addButton.tap();

    const finishButton = await element(by.id('check-button'));
    await finishButton.tap();

    const concludedField = await element(by.id('count-concluded'))

    expect(concludedField).toHaveText('1')
  });

  it('Should show amount of created tasks', async () => {
    const input = await element(by.id('home-input-id'));
    const addButton = await element(by.id('button-add'));

    await input.typeText(NEW_TASK);
    await input.tapReturnKey();
    await addButton.tap();

    await input.typeText(`${NEW_TASK}-1`);
    await input.tapReturnKey();
    await addButton.tap();

    const createdField = element(by.id('count-created'));
    expect(createdField).toHaveText('2')
  })

});
