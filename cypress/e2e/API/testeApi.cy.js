describe('API - Teste de Validação de Produtos', () => {
    it('Deve listar todos os produtos', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'

        }).then((response)=>{
           expect(response.status).to.equal(200)
        })
    });
});