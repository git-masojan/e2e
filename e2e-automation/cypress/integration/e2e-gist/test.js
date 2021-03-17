/// <reference types="cypress" />
//email dan password diisi dengan credential usernya

context('Gits Scenario', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('base_url')+'/login')
      cy.get('input[id="login_field"]')
        .type(Cypress.env('username')).should('have.value', Cypress.env('username'))
      cy.get('input[id="password"]')
        .type(Cypress.env('password')).should('have.value', Cypress.env('password'))
      cy.get('input[name="commit"]').click()
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Create, Edit, Delete, See list', () => {
      cy.visit(Cypress.env('gits_url'))
      //create gist
      cy.get('input[name="gist[description]"]').type('Gist description…')
      cy.get('input[name="gist[contents][][name]"]').type('Filename including extension….md')
      cy.get('pre[class=" CodeMirror-line "]').type('Filename including extension….md')
      cy.get('button[class="btn btn-primary BtnGroup-item hx_create-pr-button js-sync-select-menu-button"]').click()
      //edit gist
      cy.get('a[aria-label="Edit this Gist"]').click()
      cy.get('input[name="gist[description]"]').type('Gist description… Edit')
      cy.get('button[class="btn btn-primary"]').click()
      //delete gist
      cy.get('button[class="btn btn-sm btn-danger"]').click()
      cy.visit(Cypress.env('gits_url')+'/'+Cypress.env('username'))
    })
  })