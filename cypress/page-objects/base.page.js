class BasePage {

    visit(path) {
        cy.visit(path, {
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', {
                    value: 'en-US'
                });
                Object.defineProperty(win.navigator, 'languages', {
                    value: ['en-US', 'en']
                });
            }
        });
    }
}

export default BasePage;