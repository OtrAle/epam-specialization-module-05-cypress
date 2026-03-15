import CatalogPage from '../../page-objects/catalog/catalog.page';
import { paginationData } from '../../fixtures/test-data';

describe('Browse Products - Pagination', () => {

    beforeEach(() => {
        CatalogPage.visit();
    });

    it('UC-12: should navigate directly to a specific page', () => {
        CatalogPage.grid.getProductId().then(firstCardBefore => {
            CatalogPage.pagination.pageButton(2).click();
            CatalogPage.grid.waitUntilFirstProductChangesFrom(firstCardBefore);
            CatalogPage.pagination.activePage.should('have.text', '2');
            CatalogPage.grid.getProductId().should('not.eq', firstCardBefore);
        });
    });

    paginationData.forEach(({ scenario, currentPage, targetPage, arrow }) => {
        it(`UC-13: should navigate from ${currentPage} to ${targetPage} with the ${arrow} button to test ${scenario}`, () => {
            CatalogPage.pagination.pageButton(currentPage).click();
            CatalogPage.pagination.activePage.should('have.text', String(currentPage));

            CatalogPage.grid.getProductId().then(firstCardBefore => {
                CatalogPage.pagination.clickArrow(arrow);
                CatalogPage.grid.waitUntilFirstProductChangesFrom(firstCardBefore);
                CatalogPage.grid.getProductId().should('not.eq', firstCardBefore);
                CatalogPage.pagination.activePage.should('have.text', String(targetPage));
            });
        });
    });

    it('UC-14: should disable pagination arrows at boundaries', () => {
        CatalogPage.pagination.pageItems.eq(-2).click();
        CatalogPage.pagination.pageItems.eq(-1).should('have.class', 'disabled');

        CatalogPage.pagination.pageItems.eq(1).click();
        CatalogPage.pagination.pageItems.eq(0).should('have.class', 'disabled');
    });    
});