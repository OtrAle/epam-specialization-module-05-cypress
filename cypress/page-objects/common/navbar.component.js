class Navbar {
    
    get categoriesMenu() {
        return cy.get('[data-test="nav-categories"]');
    }

    categoryOption(name) {
        return cy.get(`[data-test="nav-${name.toLowerCase().replace(' ', '-')}"]`);
    }
}

export default new Navbar();