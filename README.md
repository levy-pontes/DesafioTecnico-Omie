# Projeto de Automação de Testes - Cypress

Este projeto contém a automação do fluxo de cadastro de usuário no site [ServeRest](https://front.serverest.dev/), utilizando o framework Cypress, além de consulta da lista de produtos por API

## Tecnológias Utilizadas
* [Cypress](https://www.cypress.io/)
* [Node.js](https://nodejs.org/)
* [Faker.js](https://fakerjs.dev/): Biblioteca para geração de dados aleatórios (Nomes e E-mails), garantindo que cada execução do teste seja única e não falhe por duplicidade de dados.
 
## Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js] com npm incluso no instalador do Node(https://nodejs.org/en/) (versão 14 ou superior)

## Como rodar os testes

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/levy-pontes/DesafioTecnico-Omie

2. **Entre na pasta do projeto:**
    ```bash
    cd DesafioTecnico-Omie

3. **Instale as dependências (Cypress e Faker):**
    ```bash
    npm install

4. **Abra o Cypress (Modo Interface):**
    ```bash
    npx cypress open

Após abrir, selecione "E2E Testing" -> Escolha um navegador -> Clique no arquivo cadastro.cy.js, que fica dentro da pasta Cadastro.

Para rodar o teste de API, entre na pasta de API e clique em testeApi.cy.js

5. **Rode no terminal**
    ```bash
    npx cypress run

## Estratégia dos Testes

1. A automação de interface, voltada para o cadastro do usuário, usou uma biblioteca chamada Faker, para que existesse assim a garantia de que os emails não se repetiriam e para que o teste pudesse ser repetido várias vezes.
A validação final do teste foi redirecionar para a página que abre após o cadstro ser válidado que é a home.

2. Automação API, voltada para a requisição da lista dos produtos. Ocorreu direto no endpoint de produtos, onde caso desse certo o retorno seria o Status Code 200.