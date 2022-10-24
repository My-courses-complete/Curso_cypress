describe('Probando errores', () => {
  it('Debe validar el status code fallido y el mensaje de error', () => {
    cy.request({url:'http://pokeapi.co/api/v2/4545', failOnStatusCode: false}).then((response) => {
      expect(response.status).to.equal(404)
      expect(response.body).to.be.eq('Not Found')
      // expect(response.body).to.have.property('detail', 'Not Found')
    })
  })
})