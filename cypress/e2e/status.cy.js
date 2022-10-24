describe('Probando status', () => {
  it('Validar status code exitoso', () => {
    cy.request('employes').its('status').should('equal', 200)
  })
  it('Validar status code fallido', () => {
    cy.request({url:'employes/100', failOnStatusCode: false}).its('status').should('equal', 404)
  })
})