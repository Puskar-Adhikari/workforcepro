// ***********************************************************
// This file is processed and loaded automatically before your test files.
// Use it to set up global configuration and behavior that modifies Cypress.
// ***********************************************************

// Import custom commands
import './commands';

// Example: global beforeEach hook
beforeEach(() => {
  // Clear cookies and local storage before each test
  cy.clearCookies();
  cy.clearLocalStorage();
});

// Example: handle uncaught exceptions gracefully
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false prevents Cypress from failing the test
  return false;
});

// Example: add a custom environment variable check
Cypress.env('baseUrl', 'http://localhost:3000'); // replace with actual app URL
