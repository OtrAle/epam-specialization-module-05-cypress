import BasePage from '../../../base.page';

class Filters extends BasePage {

    filterCheckbox(name) {
        return cy.get('label').filter((_, el) => {
            return Cypress.$(el).text().trim() === name;
        }).find('input');
    }

    get visibleCheckboxes() {
        return cy.get('input.icheck[name="category_id"]');
    }

    get ecoFriendlyFilter() {
        return cy.get('[data-test="eco-friendly-filter"]');
    }
}

export default new Filters();