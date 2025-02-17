describe('template spec', () => { //test suite
  it('passes', () => { //test case
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-toggle').click()
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()
    cy.get('#navbar > :nth-child(1) > :nth-child(3) > a')
  })
})