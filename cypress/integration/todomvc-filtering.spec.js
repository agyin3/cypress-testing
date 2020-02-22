/// <reference types='cypress' />

import { 
    navigate, 
    addTodo, 
    toggleTodo, 
    showOnlyActiveTodos, 
    validateNumberOfTodosShown, 
    showOnlyCompletedTodos, 
    showAllTodos 
} from "../page-objects/todo-page"

describe('filtering', () => {
    beforeEach(() => {
        navigate()

        addTodo('Watch Lakers Game')
        addTodo('Learn Cypress testing')
        addTodo('Have fun')

        toggleTodo(2)
    })

    it('should filter "Active" todos', () => {
        showOnlyActiveTodos()

        validateNumberOfTodosShown(2)
    })

    it('should filter "Completed" todos', () => {
        showOnlyCompletedTodos()

        validateNumberOfTodosShown(1)
    })

    it('should filter "All" todos', () => {
        showAllTodos()

        validateNumberOfTodosShown(3)
    })
})