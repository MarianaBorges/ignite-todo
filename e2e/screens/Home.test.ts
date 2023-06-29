import { device, expect } from 'detox';

import homePage from '../pageObjects/HomePage';

const NEW_TASK = 'Nova tarefa'

describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should show logo of the app', async () => {  
    await expect(homePage.logo).toBeVisible();
  });

  it('Should add one task', async () => {
    await homePage.addNewtask(NEW_TASK);

    await expect(homePage.task(NEW_TASK)).toBeVisible();
  });

  it('Should remove one task', async () => {
    await homePage.addNewtask(NEW_TASK);
    await homePage.removeOneTask();

    await expect(homePage.task(NEW_TASK)).not.toBeVisible();
    await expect(homePage.task(NEW_TASK)).not.toExist();
  });

  it('Should finish one task', async () => {
    await homePage.addNewtask(NEW_TASK);
    await homePage.finishTask()

    expect(homePage.concludedField).toHaveText('1')
  });

  it('Should show amount of created tasks', async () => {
    await homePage.addNewtask(NEW_TASK);
    await homePage.addNewtask(`${NEW_TASK}-1`);

    expect(homePage.createdField).toHaveText('2')
  })

});
