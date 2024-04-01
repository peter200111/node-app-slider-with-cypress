describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});


describe('Swiper Gallery Test', function () {
  it('Checks if gallery is displayed correctly', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('be.visible');
    cy.get('.swiper-button-next').should('exist').click();
    cy.get('.swiper-button-prev').should('exist').click();
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if slides are moved by navigation buttons', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});


describe('Swiper Gallery Test', function () {
  it('Checks if slide title and description are displayed', function() {
    cy.visit('http://localhost:3000');

    checkSlideContent('Rome', 'Italy');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);

    checkSlideContent('London', 'United Kingdom');

    cy.get('.swiper-button-next').click();
    cy.wait(2000);

    checkSlideContent('Paris', 'France');

  });

  const checkSlideContent = (title, description) => {
    cy.get('.swiper-slide-active .card-description h1').should('be.visible').and('contain', title);
    cy.get('.swiper-slide-active .card-description p').should('be.visible').and('contain', description);
  }
})

describe('Swiper Gallery Test', function () {
  const devices = ['macbook-15', 'ipad-2', 'iphone-x'];

  devices.forEach(device => {
    it(`Correct layout and navigation on ${device}`, function () {
      cy.viewport(device);

      cy.visit('http://localhost:3000');

      cy.get('.swiper').should('be.visible').and('have.css', 'width').and('not.eq', '0px');

      cy.get('.swiper-button-next').should('be.visible').and('exist').click();
      cy.get('.swiper-button-prev').should('be.visible').and('exist').click();
    });
  });
});
