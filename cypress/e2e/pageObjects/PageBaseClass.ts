export class PageBaseClass {
    openUrl(url: string) {
        cy.visit(url);
    }
}
