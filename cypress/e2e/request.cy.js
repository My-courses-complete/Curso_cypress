describe('Probando request', () => {
  it('Debe de crea un empleado', () => {
    cy.request({
      url: 'employes',
      method: 'POST',
      body: {
        name: 'Juan',
        lastname: 'Perez',
        age: 30,
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('name', 'Juan');
      expect(res.body).to.have.property('lastname', 'Perez');
      expect(res.body).to.have.property('age', 30);

      const id = res.body.id;
      cy.wrap(id).as('userId');
    })
  })

  it('Debe validar que se haya creado en la base de datos', function() {
    cy.request({
      url: 'employes',
    }).then((res) => {
      expect(res.body[res.body.length - 1].name).to.eq('Juan');
    })
  })

  it('Debe de actualizar un empleado', function() {
    cy.log(`userID`);
    cy.request({
      url: `employes/${this.userId}`,
      method: 'PUT',
      body: {
        name: 'Juan',
        lastname: 'Perez',
        age: 31,
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('name', 'Juan');
      expect(res.body).to.have.property('lastname', 'Perez');
      expect(res.body).to.have.property('age', 31);
    })
  })

  it('Debe de eliminar un empleado', function() {
    cy.request({
      url: `employes/${this.userId}`,
      method: 'DELETE',
    }).then((res) => {
      expect(res.status).to.equal(200);
    })
  })
})