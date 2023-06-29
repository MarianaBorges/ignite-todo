import { element, by } from "detox";

class HomePage {

    get input() {
        return element(by.id('home-input-id'));
    }

    get addButton() {
        return element(by.id('button-add'));
    }

    get removeButton() {
        return element(by.id('button-delete'));
    }

    get createdField() {
        return element(by.id('count-created'));
    }

    get concludedField() {
        return element(by.id('count-concluded'));
    }

    get logo() {
        return element(by.id('logoId'));
    }

    get finishButton() {
        return element(by.id('check-button'));
    }

    get confirmButton() {
        return element(by.text('Sim'));
    }

    task(newTask: string) {
        return element(by.text(newTask));
    }

    async addNewtask(newTask: string){
        await this.input.typeText(newTask);
        await this.input.tapReturnKey();

        await this.addButton.tap();
    }

    async removeOneTask() {
        await this.removeButton.tap();
        await this.confirmButton.tap();
    }

    async finishTask() {
        await this.finishButton.tap();
    }
}

export default new HomePage();