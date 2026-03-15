import BasePage from '../base.page';
import ProductGrid from './components/product-grid.component';
import Pagination from './components/pagination.component';
import Filters from './components/sidebar/filters.component';
import PriceSlider from './components/sidebar/price-slider.component';
import Sort from './components/sidebar/sort.component';
import Navbar from '../common/navbar.component';

class CatalogPage extends BasePage {

    get grid() {
        return ProductGrid;
    }

    get pagination() {
        return Pagination;
    }

    get filters() {
        return Filters;
    }

    get priceSlider() {
        return PriceSlider;
    }

    get sort() {
        return Sort;
    }

    get navbar() {
        return Navbar;
    }

    visit() {
        super.visit('/');
        this.grid.container.should('be.visible');
    }
}

export default new CatalogPage();