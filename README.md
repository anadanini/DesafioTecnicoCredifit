# Projeto: Desafio Técnico Credifit

Este repositório contém os arquivos necessários para executar o Desafio Técnico Credifit.

## Conteúdo do Repositório

1. **Caderno de testes Desafio técnico QA CrefiFit Ana Danini.pdf** - Documentação dos testes e critérios de aceitação para o 1º exércicio do desafio técnico.
   
2. **cypress-desafiotecnico/** - Diretório contendo os testes automatizados desenvolvidos com Cypress para o 2º exércicio desafio técnico.

3. **Apresentação do desafio técnico Ana Danini.mp4** - Vídeo explicativo sobre o desafio técnico.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (você pode baixá-lo [aqui](https://nodejs.org/))
- [Cypress](https://www.cypress.io/) (v12.5.0 ou superior)
- [Visual Studio Code](https://code.visualstudio.com/) (ou qualquer editor de código de sua preferência)

## Execução no Windows

Para executar este projeto no Windows, siga os passos abaixo:

1. Clone este repositório DesafioTecnicoCredifit:

   ```bash / cdm/ 
   git clone https://github.com/seuusuario/DesafioTecnicoCredifit.git
   ```

2. Abra a pasta `cypress-desafiotecnico` no Visual Studio Code:

   ```bash
   cd DesafioTecnicoCredifit/cypress-desafiotecnico
   code .
   ```

3. No terminal do Visual Studio Code, instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Para iniciar o Cypress e executar os testes:

   ```bash
   npx cypress open
   ```

5. No Cypress, selecione a opção **E2E Testing** e escolha o navegador **Chrome**.
   
6. Selecione o arquivo `testetecnico.spec.js` para executar os testes.
