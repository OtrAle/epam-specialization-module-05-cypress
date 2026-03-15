# Cypress E2E Catalog Testing – Practice Software Testing

This repository contains an End-to-End (E2E) automation suite focused on testing the **Browse Products** functionality of the [Practice Software Testing application](https://practicesoftwaretesting.com/). It uses Cypress and follows the **Page Object Model** structure for clarity and scalability.

## Key Features

- **Page Object Model (POM):** Maintains separation between UI elements and test logic, with reusable components for the sidebar, grid, pagination, and navbar.
- **Centralized test data:** Multi-scenario test inputs are managed in test-data.js, enabling forEach iteration over data sets for cases like price slider scenarios, sort options, filter combinations, and pagination scenarios.
- **Comprehensive catalog coverage:** Validates product display, sorting, filtering, price range slider, pagination, and category navigation.
- **Mochawesome HTML Reports:** An HTML report is automatically generated in the /cypress/reports folder after each test run, providing a visual summary of passed and failed tests.

## Requirements

- Node.js
- npm
- Git

## Required browsers

- Google Chrome  
- Mozilla Firefox  
- Microsoft Edge  

## Installation

```bash
git clone https://github.com/OtrAle/epam-specialization-module-05-cypress
npm install
```

## Execution Commands

Run from the project root directory:

| Command | Description |
|---------|-------------|
| `npm run cy:open` | Opens the Cypress Test Runner (interactive mode). |
| `npm run cy:run` | Runs all tests headlessly. |
| `npm run cy:headed` | Runs all tests in headed mode (browser visible). |
| `npm run cy:chrome` | Runs all tests in Google Chrome. |
| `npm run cy:firefox` | Runs all tests in Mozilla Firefox. |
| `npm run cy:edge` | Runs all tests in Microsoft Edge. |

## Project Structure

| Path | Purpose |
|------|---------|
| `cypress/fixtures/test-data.js` | Centralized test data. |
| `cypress/e2e/catalog/` | Test specs organized by feature. |
| `cypress/page-objects/` | Page Objects for selectors and browse products related actions. |
| `cypress.config.js` | Cypress configuration file. |
| `package.json` | Dependencies and npm scripts. |
| `cypress/reports/` | Created when running tests, contains HTML report and JSON files. |


##  Test Scenarios Covered

- ✅ UC-1 GRID: Displaying the product grid shows product name, price, image, and CO₂ rating for each product.
- ✅ UC-2 SORT: Selecting a sort option reorders the product grid according to the selected criteria.
- ✅ UC-3 PRICE RANGE: Adjusting the price range slider filters the product grid to show products within the selected range.
- ✅ UC-10 FILTERS: Selecting checkbox filters updates the product grid accordingly.
- ✅ UC-11 FILTERS: Selecting a parent category checkbox automatically selects its child categories.
- ✅ UC-12 PAGINATION: Clicking a page number navigates directly to the corresponding page.
- ✅ UC-13 PAGINATION: Clicking the pagination arrow buttons navigates to the next or previous page.
- ✅ UC-14 PAGINATION: Pagination arrow buttons are disabled when the first or last page is reached.
- ✅ UC-15 CATEGORIES: Navigating to a category from the navbar updates both the sidebar filters and the product grid.

## Author 

Laura Alejandra Hernández Martínez