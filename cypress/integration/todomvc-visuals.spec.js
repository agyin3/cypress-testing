/// <reference types='cypress' />

import * as todoPage from '../page-objects/todo-page.js'

describe('visual validation', () => {
    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({
        appName: 'Cypress Testing Examples', 
        batchName: 'Cypress TestingMVC',
        browser: [
            {name: 'chrome', width: 1024, height: 724},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 724},
            {deviceName: 'iPhone X'}
        ]
    }))
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')
        todoPage.addTodo('Wash car')
        todoPage.addTodo('Learn Cypress testing')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})