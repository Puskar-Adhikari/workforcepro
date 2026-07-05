import EmployeePage from '../pageObjects/EmployeePage';

describe('Employee Management', () => {
  it('should create a new employee', () => {
    cy.visit('/employees/new');
    EmployeePage.createEmployee("John Doe", "EMP-2001", "john.doe@test.com", "Engineering", "Jane Smith");
    cy.contains("Employee created successfully").should('be.visible');
  });

  it('should reject duplicate email', () => {
    cy.visit('/employees/new');
    EmployeePage.createEmployee("Jane Doe", "EMP-2002", "john.doe@test.com", "HR", "Mark Lee");
    cy.contains("Email already in use").should('be.visible');
  });
});
