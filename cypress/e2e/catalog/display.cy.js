import CatalogPage from '../../page-objects/catalog/catalog.page';

describe('Browse Products - Display Grid', () => {

    beforeEach(() => {
        CatalogPage.visit();
    });

    it('UC-1: should display each product with name, price, image, and CO2 rating', () => {
        CatalogPage.grid.container.should('be.visible');
        CatalogPage.grid.productCards.should('have.length.gte', 1);

        CatalogPage.grid.productCards.each((card) => {
            CatalogPage.grid.getProductName(cy.wrap(card)).should('be.visible');
            CatalogPage.grid.getProductPrice(cy.wrap(card)).should('be.visible');
            CatalogPage.grid.getProductImage(cy.wrap(card)).should('be.visible');
            CatalogPage.grid.getProductCO2(cy.wrap(card)).should('be.visible');
        });
    });
});