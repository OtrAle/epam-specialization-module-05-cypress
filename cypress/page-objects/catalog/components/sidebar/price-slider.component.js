import BasePage from '../../../base.page';

class PriceSlider extends BasePage {

    get handleMin() {
        return cy.get('.ngx-slider-pointer-min');
    }

    get handleMax() {
        return cy.get('.ngx-slider-pointer-max');
    }

    getHandleValue(handle) {
        return Number(handle.attr('aria-valuenow'));
    }

    setSliderRange(targetMin, targetMax) {
        this.handleMax.then(max => {
            if (this.getHandleValue(max) !== targetMax) {
                this.adjustWithKeys(max, targetMax, true);
            }
        });

        this.handleMin.then(min => {
            if (this.getHandleValue(min) !== targetMin) {
                this.adjustWithKeys(min, targetMin, false);
            }
        });
    }

    adjustWithKeys(handle, targetValue, isMax) {
        cy.wrap(handle).click().then(el => {
            const realValue = this.getHandleValue(el);

            if (targetValue === realValue) return;

            let anchorKey = '';
            let pageKey = '';
            let arrowKey = '';
            let pages = 0;
            let arrows = 0;

            if (targetValue === 0) {
                cy.wrap(el).type('{home}', { delay: 0 });
                return;
            } else if (targetValue === 200) {
                cy.wrap(el).type('{end}', { delay: 0 });
                return;
            } else if (isMax) {
                const dist = 200 - targetValue;
                pages = Math.floor(dist / 40);
                arrows = (dist % 40) / 2;
                anchorKey = '{end}';
                pageKey = '{pageDown}';
                arrowKey = '{leftArrow}';
            } else {
                const dist = targetValue;
                pages = Math.floor(dist / 40);
                arrows = (dist % 40) / 2;
                anchorKey = '{home}';
                pageKey = '{pageUp}';
                arrowKey = '{rightArrow}';
            }

            const anchorAndPages = anchorKey + pageKey.repeat(pages);
            cy.wrap(el).type(anchorAndPages, { delay: 0 });

            if (arrows > 0) {
                cy.wrap(el).type(arrowKey.repeat(arrows), { delay: 0 });
            }
        });
    }

    getRange() {
        return this.handleMin.then(min => {
            return this.handleMax.then(max => {
                return {
                    min: this.getHandleValue(min),
                    max: this.getHandleValue(max)
                };
            });
        });
    }
}

export default new PriceSlider();