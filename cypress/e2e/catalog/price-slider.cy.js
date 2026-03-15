import CatalogPage from '../../page-objects/catalog/catalog.page';
import { priceSliderScenarios } from '../../fixtures/test-data';

describe('Browse Products - Price Range Slider', () => {

    beforeEach(() => {
        CatalogPage.visit();
    });

    priceSliderScenarios.forEach(({ scenario, min, max }) => {
        it(`UC-3: should validate: ${scenario} to filter products between ${min} and ${max}`, () => {
            CatalogPage.priceSlider.setSliderRange(min, max);
            CatalogPage.priceSlider.getRange().should('deep.equal', { min, max });

            CatalogPage.sort.sortDropdown.select('price,desc');
            CatalogPage.grid.sortingCompleted.should('exist');

            CatalogPage.grid.productCards.first().then(card => {
                cy.wrap(CatalogPage.grid.getProductPrice(card)).invoke('text').then(priceText => {
                    const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
                    expect(price).to.be.lte(max);
                });
            });
        });
    });

    it('UC-4: should display a "no results" message for an empty price range', () => {
        CatalogPage.priceSlider.setSliderRange(100, 100);
        CatalogPage.priceSlider.getRange().should('deep.equal', { min: 100, max: 100 });
        CatalogPage.grid.noResults.should('be.visible');
    });

});