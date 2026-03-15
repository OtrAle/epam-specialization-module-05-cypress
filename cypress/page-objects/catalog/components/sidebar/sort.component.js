import BasePage from '../../../base.page';

class Sort extends BasePage {

    get sortDropdown() {
        return cy.get('[data-test="sort"]');
    }
}

export default new Sort();