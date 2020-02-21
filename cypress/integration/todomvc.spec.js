/// <reference types='cypress' />

it('should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
})

it('should be able to add a new todo to the list', () => {

    cy.get('.new-todo').type('Watch Lakers game{enter}')

    cy.get('label').should('have.text', 'Watch Lakers game')

    cy.get('.toggle').should('not.be.checked')
})

it('should toggle todo to complete', () => {

    cy.get('.toggle').click()
    cy.get('.toggle').should('be.checked')
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})

it('should clear completed todo', () => {
    cy.contains('Clear').click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
})