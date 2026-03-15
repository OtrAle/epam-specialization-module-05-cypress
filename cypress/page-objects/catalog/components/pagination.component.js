import BasePage from '../../base.page';

class Pagination extends BasePage {

    get nextButton() {
        return cy.get('[aria-label="Next"]');
    }

    get prevButton() {
        return cy.get('[aria-label="Previous"]');
    }

    get activePage() {
        return cy.get('.page-item.active');
    }

    get disabledButton() {
        return cy.get('.page-item.disabled');
    }

    get pageItems() {
        return cy.get('.page-item');
    }

    pageButton(number) {
        return cy.get(`[aria-label="Page-${number}"]`);
    }

    clickArrow(arrow) {
        if (arrow === 'next') {
            this.nextButton.click();
        } else {
            this.prevButton.click();
        }
    }
}

export default new Pagination();