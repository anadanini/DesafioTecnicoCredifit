describe('Explorar tela login', () => {    
    it('Verificar que o funcionário existente consegue acessar o aplicativo da Credifit', () => {
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.
        cy.get('#login_form_email').click().type("testes+desafioqa@credifit.com.br") // Clica no campo e-mail e insere o e-mail correto.      
        cy.get('#login_form_password').type("abcd1234") // Clica no campo senha e insere a senha correta.
        cy.get('.ant-btn').click() // clica no botão entrar.
        cy.wait(900); // aguarda .
        cy.get('.ant-avatar').click() // clica no avatar de perfil.
        cy.wait(500) // aguarda .
        cy.get('li[class="ant-menu-item"]').click() // Localiza e clica no item lagout.
        cy.wait(1000)

    });
    it('Verificar que o funcionário não consegue acessar o aplicativo da Credifit com credenciais inválidas (E-mail e senha)', () => {
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.
        cy.get('#login_form_email').click().type("desafioqa@credifit.com.br") // Clica no campo e-mail e insere o e-mail incorreto.    
        cy.get('#login_form_password').type("1234") // Clica no campo senha e insere a senha incorreta. 
        cy.wait(1000)
        cy.get('.ant-btn').click() // clica no botão entrar
        cy.wait(3000)
    });
    it('Verificar que o funcionário não consegue acessar o aplicativo da Credifit com o campos E-mail e Senha em branco.', () => {
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.
        cy.wait(3000)
        cy.get('.ant-btn').click() // clica no botão entrar
        cy.wait(3000)
        
    });
    it('Verificar login com estouro de campos do e-mail', () => {
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.
        cy.get('#login_form_email').click().type("testes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.brtestes+desafioqa@credifit.com.br") // Clica no campo e-mail e insere várias vezes o e-mail correto.
        cy.get('#login_form_password').type("abcd1234") // Clica no campo senha e insere a senha correta.
        cy.get('.ant-btn').click() // clica no botão entrar.
        cy.wait(1000)
    });
    it('Verificar login com estouro de campos da senha', () => {
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.
        cy.get('#login_form_email').click().type("testes+desafioqa@credifit.com.br") // Clica no campo e-mail correto.  
        cy.get('#login_form_password').type("abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234") // Clica no campo senha e insere várias vezes a senha correta.
        cy.get('.ant-btn').click() // clica no botão entrar.
        cy.wait(1000)

        
    });
    
    it('Redefinir a senha', () => {
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.
        cy.get('.ant-form-item-children > a').click()  // Clica em esqueci minha senha
        cy.wait(1000)
        cy.get('#email_confirm_form_email').click().type('testes+desafioqa@credifit.com.br') // Digita o e-mail para recuperar a senha
        cy.get('.ant-btn').click() // clica no botão avançar
        cy.wait(1000)
        cy.visit(" https://admin-develop.credifit.com.br/login") // visita a página de login da credfit.

    });


    
});