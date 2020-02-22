
export function navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
}

export function addTodo(text) {
    cy.get('.new-todo').type(`${text}{enter}`)
}

export function validateTodoTxt(todoIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should('have.text', expectedText)
}

export function showOnlyActiveTodos(){
    cy.contains('Active').click()
}

export function showOnlyCompletedTodos(){
    cy.contains('Completed').click()
}

export function showAllTodos(){
    cy.contains('All').click()
}

export function validateNumberOfTodosShown(length){
    cy.get('.todo-list li').should('have.length', length)
}

export function ClearCompleted(){
    cy.contains('Clear').click()
}

export function toggleTodo(todoIndex){
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export function validateTodoCompletedState(todoIndex, shouldBeCompleted){
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).should(`${shouldBeCompleted ? `` : `not.`}be.checked`)
    cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should(`${shouldBeCompleted ? `` : `not`}have.css`, 'text-decoration-line', 'line-through')
}

export function validateToggleState(todoIndex, shouldBeToggled){
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should(`${shouldBeToggled ? `` : `not.`}be.checked`)
}