describe('Probando body', () => {
  it('resultados del body', () => {
    cy.request('employes/1').its('body').its('name').should('include', 'John')
    cy.request('employes/1').then((response) => {
      expect(response.body).to.have.property('name', 'John')
      expect(response.body).to.have.property('age', 25)
    })
  })
})