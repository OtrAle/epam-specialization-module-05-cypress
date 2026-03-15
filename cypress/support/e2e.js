import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});