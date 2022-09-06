/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        clearAndType(
            locator: string,
            text: string,
            numberOfElement?: number,
            waitTime?: number
        ): Chainable<boolean>;
        visitAndWait(url: string, waitTime: number): Chainable<boolean>;
        acceptCookies(): Chainable<boolean>;
        closeModal(): Chainable<boolean>;
        getArticleNumber(element: any): Chainable<string>;
        logOrderNumber(orderNumber: any): Chainable<boolean>;
        waitForApplicationToBeReady(): Chainable<boolean>;
        goToPage(url: string, clickBody?: boolean): Chainable<boolean>;
        goToCategoryPage(url: string, locators: any): Chainable<boolean>;
        openCategory(index: number, locators: any): Chainable<boolean>;
        getNumberOfElements(locator: any): Chainable<number>;
    }
}
