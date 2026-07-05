WorkForcePro — QA Engineer Take-Home Assignment

This repository contains the complete QA deliverables for the WorkForcePro Workforce Management & On-the-Job Training (OJT) Platform take-home assignment. It covers manual testing, API testing, automation, database validation, accessibility testing, and a bonus troubleshooting investigation.

Scenario

WorkForcePro is a platform that allows organizations to create employee profiles, assign employees to departments/supervisors, run OJT training programs, track training progress, manage certifications and expirations, and generate compliance reports. This repo documents the testing performed to validate the platform prior to release.

Repository Structure & Deliverables

#PartDeliverableFile(s) in this Repo1Test Planning & Traceability MatrixTest PlanWorkForcePro_NewTest_Plan_Part1.pdf1Test Planning & Traceability MatrixTest ScenariosPart1_WorkForcePro_Test_Scenarios_Enhanced...1Test Planning & Traceability MatrixDetailed Test CasesPart1_WorkForcePro_Detailed_Test_Cases_Enha...1Test Planning & Traceability MatrixRequirement Traceability Matrix (RTM)Part1_WorkForcePro_RTM_Enhanced.xlsx2Manual Testing & Defect IdentificationSmoke Test ChecklistPart2_WorkForcePro_Smoke_Test_Checklist_Enh...2Manual Testing & Defect IdentificationDefect ReportPart2_WorkForcePro_Defect_Report.xlsx3API Testing (Postman)API Testing Strategy & ReportAPI_Testing_Strategy_WorkForcePro (1).pdf4SQL ValidationSQL QueriesSQL_Queries.sql4SQL ValidationQuery ExplanationsSQL_Explanation.pdf5Automation Testing (Cypress)Cypress Project & Execution Reportcypress-automation/6Accessibility TestingAccessibility ReportAccessibility_Report_WorkForcePro.pdf7Bonus: Rails Console InvestigationInvestigation Write-upPart7_Bonus_Investigation_WorkForcePro.pdf

Part-by-Part Summary

Part 1 — Test Planning & Traceability Matrix (20 pts)

Covers requirements for Employee Management (EMP-001–003), OJT Training (OJT-001–004), and Certification Management (CERT-001–003). Includes high-level test scenarios, detailed test cases (ID, requirement mapping, preconditions, steps, expected result, priority), and an RTM mapping every requirement to its corresponding test case(s).

Part 2 — Manual Testing & Defect Identification (20 pts)

Functional test cases for employee creation, duplicate-employee validation, training assignment, training completion, and supervisor approval workflow. Includes a smoke test suite (Login, Employee Management, Training Assignment, Training Completion, Certification Tracking) and a defect report documenting 5+ defects/risks/usability issues with severity, priority, repro steps, and expected vs. actual results.

Part 3 — API Testing (Postman) (20 pts)

Positive and negative test scenarios for the Employees (POST/GET/PUT/DELETE /api/employees) and Training (assign, complete, approve) endpoints, with validation of status codes, response structure, required fields, and business rules (e.g., duplicate email, missing employee ID, invalid training ID, approving non-completed training, completing unassigned training). Findings and coverage summarized in the API Testing Strategy report.

Part 4 — SQL Validation (15 pts)

Queries covering: employees & departments, employees who completed all assigned trainings, training counts per employee, certifications expiring within 30 days, employees with overdue trainings, and top 5 employees by completed trainings — with explanations for each query's logic.

Part 5 — Automation Testing (Cypress) (20 pts)

Cypress project (Page Object Model) automating: employee creation & duplicate-email validation, training assignment and verification, OJT completion + supervisor approval, and expiring-certification alerts. See cypress-automation/ for the project and execution report.

To run locally:

bashcd cypress-automation
npm install
npx cypress open   # interactive mode
npx cypress run     # headless mode

Part 6 — Accessibility Testing (5 pts)

Manual + DevTools-based accessibility audit of SauceDemo's login and product listing pages, covering keyboard accessibility, form/label accessibility, visual contrast, screen reader considerations, and usability barriers. Reported as Issue ID / Area / Description / Severity / User Impact / Recommendation.

Part 7 — Bonus: Rails Console Investigation (Optional)

Investigation approach for the reported issue "an employee can see OJT records belonging to another employee," using Rails Console, SQL queries, and application logs — including root-cause hypotheses, validation approach, and fix recommendations.

Evaluation Weighting (per assignment brief)

AreaWeightManual Testing20%API Testing20%Automation (Cypress)20%SQL Skills15%Test Design & RTM20%Accessibility Testing5%

Tech / Tools Used


Test Design & Docs: Excel (RTM, Defect Report), PDF/Markdown reports
API Testing: Postman
Automation: Cypress (Page Object Model)
Database: SQL
Accessibility: Chrome DevTools / Lighthouse, manual keyboard & screen-reader checks


Author

Puskar Adhikari
