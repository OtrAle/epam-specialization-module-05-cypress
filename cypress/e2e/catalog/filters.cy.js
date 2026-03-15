import CatalogPage from '../../page-objects/catalog/catalog.page';
import { filters, filterParents } from '../../fixtures/test-data';

describe('Browse Products - Checkbox Filters', () => {

    beforeEach(() => {
        CatalogPage.visit();
    });

    filters.forEach((filterName) => {
        it(`UC-10: should update the product grid when the filter "${filterName}" is applied`, () => {
            CatalogPage.filters.filterCheckbox(filterName).click();
            CatalogPage.filters.filterCheckbox(filterName).should('be.checked');
            CatalogPage.grid.filterCompleted.should('exist');
        });
    });

    filterParents.forEach(({ parent, children }) => {
        it(`UC-11: should auto-select all subcategories when "${parent}" is selected`, () => {
            CatalogPage.filters.filterCheckbox(parent).click();
            CatalogPage.grid.filterCompleted.should('exist');
            CatalogPage.filters.filterCheckbox(parent).should('be.checked');
            children.forEach((child) => {
                CatalogPage.filters.filterCheckbox(child).should('be.checked');
            });
        });
    });
});