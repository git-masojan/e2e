/// <reference types="cypress" />
const username = process.env.username
const password = process.env.password
//email dan password diisi dengan credential usernya

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://github.com/login')
      cy.get('input[id="login_field"]')
        .type(username).should('have.value', username)
      cy.get('input[id="password"]')
        .type(password).should('have.value', password)
      cy.get('input[name="commit"]').click()
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.visit('https://gist.github.com/')
      //create gist
      cy.get('input[name="gist[description]"]').type('Create Gist')
      cy.get('input[name="gist[contents][][name]"]').type('Creating Gist')
      cy.get('pre[class=" CodeMirror-line "]').type('Creating Gist')
      cy.get('button[class="btn js-gist-create "]').click()
      //edit gist
      cy.get('a[aria-label="Edit this Gist"]').click()
      cy.get('input[name="gist[description]"]').type('This is deescription for creating gist')
      cy.get('button[class="btn btn-primary"]').click()
      //delete gist
      cy.get('button[class="btn btn-sm btn-danger"]').click()
    })
  })