describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    
    cy.wait(3000);

    const linkInput = cy.get('input');

    linkInput.focus();

    linkInput.type('test', { force: true });

    const addButton = cy.get('button');
    
    addButton.click();

    cy.wait(3000);

    const addGleanButton = cy.get('button[data-cy="add_glean"]');

    addGleanButton.click();
  })
})