/// <reference types="cypress" />

describe("Test contact us form", () => {
    it("should be able to submit successfully", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us > .thumbnail').click()
})
    it("should not be able to submit as all fields are required ", () => {
        // code goes here
    })
})
