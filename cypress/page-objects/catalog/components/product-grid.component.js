class ProductGrid {

    get container() {
        return cy.get('div.container[data-test]');
    }

    get productCards() {
        return cy.get('a.card[data-test^="product-"]');
    }

    get noResults() {
        return cy.get('[data-test="no-results"]');
    }

    get sortingCompleted() {
        return cy.get('[data-test="sorting_completed"]');
    }

    get filterCompleted() {
        return cy.get('[data-test="filter_completed"]');
    }

    get searchCompleted() {
        return cy.get('[data-test="search_completed"]');
    }

    get pageTitle() {
        return cy.get('[data-test="page-title"]');
    }

    get searchCaption() {
        return cy.get('[data-test="search-term"]');
    }

    getProductName(card) {
        return card.find('[data-test="product-name"]');
    }

    getProductPrice(card) {
        return card.find('[data-test="product-price"]');
    }

    getProductImage(card) {
        return card.find('img');
    }

    getProductCO2(card) {
        return card.find('[data-test="co2-rating-badge"]');
    }

    getProductId(index = 0) {
        return this.productCards.eq(index).invoke('attr', 'data-test');
    }

    waitUntilFirstProductChangesFrom(previousId) {
        this.productCards.eq(0).invoke('attr', 'data-test').should('not.eq', previousId);
    }
}

export default new ProductGrid();