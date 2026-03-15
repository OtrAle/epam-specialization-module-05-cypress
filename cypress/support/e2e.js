import 'cypress-real-events'

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});