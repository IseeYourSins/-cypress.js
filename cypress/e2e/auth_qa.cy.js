describe('Форма логина', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains ('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('burn-88@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains ('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains ('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Неверный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.com');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains ('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Валидация @ в поле логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.com');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains ('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled');
        cy.get('#loginButton').click();
        cy.contains ('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})