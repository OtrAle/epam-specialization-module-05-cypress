import BasePage from '../../../base.page';

class PriceSlider extends BasePage {

    get handleMin() {
        return cy.get('.ngx-slider-pointer-min');
    }

    get handleMax() {
        return cy.get('.ngx-slider-pointer-max');
    }

    get displayedMinPrice() {
        return cy.get('.ngx-slider-model-value');
    }

    get displayedMaxPrice() {
        return cy.get('.ngx-slider-model-high');
    }

    getHandleValue($handle) {
        return Number($handle.attr('aria-valuenow'));
    }

    setSliderRange(targetMin, targetMax) {
        this.handleMin.then($min => {
            this.handleMax.then($max => {
                const minLeft = parseFloat($min.css('left'));
                const maxLeft = parseFloat($max.css('left'));
                const minValue = this.getHandleValue($min);
                const maxValue = this.getHandleValue($max);
                const pxPerUnit = (maxLeft - minLeft) / (maxValue - minValue);

                this.dragHandle($max, targetMax, maxValue, pxPerUnit);
                this.dragHandle($min, targetMin, minValue, pxPerUnit);
            });
        });
    }

    dragHandle($handle, targetValue, currentValue, pxPerUnit) {
        if (currentValue === targetValue) return;

        const dragX = Math.round((targetValue - currentValue) * pxPerUnit);

        cy.wrap($handle)
            .realMouseDown()
            .realMouseMove(dragX, 0)
            .realMouseUp();

        this.adjustWithKeys($handle, targetValue);
    }

    adjustWithKeys($handle, targetValue) {
        cy.wrap($handle).then($el => {
            const realValue = this.getHandleValue($el);
            const diff = targetValue - realValue;

            if (diff !== 0) {
                const keys = diff > 0
                    ? '{rightArrow}'.repeat(Math.abs(diff))
                    : '{leftArrow}'.repeat(Math.abs(diff));

                cy.wrap($el).click().type(keys, { delay: 0 });
            }
        });
    }

    getRange() {
        return this.handleMin.then($min => {
            return this.handleMax.then($max => {
                return {
                    min: this.getHandleValue($min),
                    max: this.getHandleValue($max)
                };
            });
        });
    }
}

export default new PriceSlider();