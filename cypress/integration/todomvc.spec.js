/// <reference types='cypress' />

it('should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
})

it('should be able to add a new todo to the list', () => {

    cy.get('.new-todo').type('Watch Lakers game{enter}')
})

it('should toggle todo to complete', () => {

    cy.get('.toggle').click()
})

it('should clear completed todo', () => {
    cy.contains('Clear completed').click()
})