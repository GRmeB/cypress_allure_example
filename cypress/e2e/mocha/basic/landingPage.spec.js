describe('Landing Page ', { tags: ['@smoke'] }, () => {
    it('Landing Page test 1', () => {
        cy.visit(Cypress.config('sites')[0].sites[0].url);
        cy.get('elementDoesNotExist').should('be.visible');
    });

    it('Landing Page test 2', () => {
        cy.visit(Cypress.config('sites')[0].sites[0].url);
        expect(true).to.equal(false);
    });
});
