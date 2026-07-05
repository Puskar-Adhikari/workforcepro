# Cypress Automation – WorkForcePro

This project automates core workflows of the WorkForcePro platform.

## Workflows Covered
- Employee Management (create employee, duplicate email validation)
- Training Workflow (assign training, verify assignment)
- OJT Completion (employee completes, supervisor approves)
- Certification Tracking (expiring certification alerts)

## Structure
- **pageObjects/** → Page Object Model classes
- **e2e/** → Test specs
- **fixtures/** → Test data
- **support/** → Custom commands

## Run Tests
```bash
npm install
npm run open
