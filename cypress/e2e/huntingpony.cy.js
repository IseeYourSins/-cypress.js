describe('Тестирование HuntinPony', function () {
    
    it('Открыть сайт', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="3"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338933807"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(500);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(500);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(500);
        cy.get('.header__cart').click();
        cy.wait(500);
        cy.get('.cart-controls > .button').click();
        cy.wait(500);
        cy.contains('Оформление заказа');
    })
})
