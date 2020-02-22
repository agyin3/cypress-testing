/// <reference types='cypress' />

import { 
    navigate, 
    addTodo, 
    validateTodoTxt, 
    toggleTodo, 
    validateTodoCompletedState, 
    ClearCompleted, 
    validateNumberOfTodosShown, 
    validateToggleState 
} from "../page-objects/todo-page"

it('should navigate to the TodoMVC App', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
})
describe('todo actions', () => {

    beforeEach(() => {
        navigate()

        addTodo('Watch Lakers Game')
    })
    it('should be able to add a new todo to the list', () => {
    
        validateTodoTxt(0, 'Watch Lakers Game')
    
        validateToggleState(0, false)
    })
    
    it('should toggle todo to complete', () => {
    
        toggleTodo(0)
        validateTodoCompletedState(0, true)
    })
    
    it('should clear completed todo', () => {
        toggleTodo(0)
        ClearCompleted()
        validateNumberOfTodosShown(0)
    })
})
