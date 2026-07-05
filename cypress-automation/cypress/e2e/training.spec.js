import TrainingPage from '../pageObjects/TrainingPage';

describe('Training Workflow', () => {
  it('should assign training to employee', () => {
    cy.visit('/trainings/assign');
    TrainingPage.assignTraining("John Doe", "Safety Induction", "2026-07-28");
    cy.contains("Training assigned successfully").should('be.visible');
  });
});
