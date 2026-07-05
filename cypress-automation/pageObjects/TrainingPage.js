class TrainingPage {
  assignTraining(employee, module, dueDate) {
    cy.get('#employee').select(employee);
    cy.get('#trainingModule').select(module);
    cy.get('#dueDate').type(dueDate);
    cy.get('#assignBtn').click();
  }
}
export default new TrainingPage();
