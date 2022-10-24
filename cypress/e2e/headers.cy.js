describe('Probando headers', () => {
  it('Validar header y content type', () => {
    cy.request('employes').its('headers').its('content-type').should('include', 'application/json')
  })
})