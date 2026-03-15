import CatalogPage from '../../page-objects/catalog/catalog.page';
import { filterParents } from '../../fixtures/test-data';

describe('Browse Products - Category Navigation', () => {

    beforeEach(() => {
        CatalogPage.visit();
    });

    filterParents.forEach(({ parent, children }) => {
        it(`UC-15: should filter products when selecting the "${parent}" category from navigation`, () => {
            CatalogPage.navbar.categoriesMenu.click();
            CatalogPage.navbar.categoryOption(parent).click();

            cy.url().should('include', `/category/${parent.toLowerCase().replace(' ', '-')}`);
            CatalogPage.grid.pageTitle.should('have.text', `Category: ${parent}`);

            CatalogPage.filters.filterCheckbox(children[0]).should('exist');
            CatalogPage.filters.visibleCheckboxes.should('have.length', children.length + 1);
        });
    });
});