
class EmployeePage {
  createEmployee(name, id, email, department, supervisor) {
    cy.get('#name').type(name);
    cy.get('#employeeId').type(id);
    cy.get('#email').type(email);
    cy.get('#department').select(department);
    cy.get('#supervisor').select(supervisor);
    cy.get('#saveBtn').click();
  }
}
export default new EmployeePage();
