class Sort {

    get sortDropdown() {
        return cy.get('[data-test="sort"]');
    }
}

export default new Sort();