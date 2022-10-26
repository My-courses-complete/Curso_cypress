describe('Probando GraphQL', () => {
  it('Debe de hacer una consulta con graphQL', () => {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }`;

    const gqlVariables = {
      limit: 2,
      offset: 0,
    };

    cy.request({
      method: 'POST',
      url: 'https://graphql-pokeapi.graphcdn.app/',
      body: {
        query: gqlQuery,
        variables: gqlVariables,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('data');
      expect(res.body.data).to.have.property('pokemons');
      expect(res.body.data.pokemons).to.have.property('count');
      expect(res.body.data.pokemons.results[0].name).to.equal('bulbasaur');
    });
  })
})