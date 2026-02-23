import { faker } from '@faker-js/faker';

describe('Cadastro de usuário', () => {
    it('Cadastro de usuário realizado com sucesso', () => {
        
        // gera nome e e-mail aleatório  
        const nomeAleatorio = faker.person.firstName();
        const emailAleatorio = faker.internet.email();
        
        // Acessa a página do e-commerce
        cy.visit('https://front.serverest.dev/login')
        
        // Seleciona a opção Cadastrar
        cy.get('[data-testid="cadastrar"]').click()

        // Preenche os dados cadastrais
        cy.get('[data-testid="nome"]').type(nomeAleatorio);
        cy.get('[data-testid="email"]').type(emailAleatorio);
        cy.get('[data-testid="password"]').type('123456')
        cy.get('[data-testid="cadastrar"]').click()
        // Assert

        cy.url().should('eq', 'https://front.serverest.dev/home')


    })
})