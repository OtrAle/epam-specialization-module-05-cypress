import CatalogPage from '../../page-objects/catalog/catalog.page';
import { sortOptions } from '../../fixtures/test-data';

describe('Browse Products - Sorting Logic', () => {

    beforeEach(() => {
        CatalogPage.visit();
    });

    sortOptions.forEach((option) => {
        it(`UC-2: should sort products correctly by ${option}`, () => {
            CatalogPage.sort.sortDropdown.select(option);
            CatalogPage.grid.sortingCompleted.should('exist');
        });
    });
});