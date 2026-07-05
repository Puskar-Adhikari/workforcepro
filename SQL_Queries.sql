-- 1. Return all employees and their departments
SELECT name, department
FROM employees;

-- 2. Return employees who have completed all assigned trainings
SELECT e.name
FROM employees e
JOIN employee_trainings et ON e.id = et.employee_id
WHERE et.status = 'completed';

-- 3. Count trainings per employee
SELECT employee_id, COUNT(training_id) AS training_count
FROM employee_trainings
GROUP BY employee_id;

-- 4. Certifications expiring within 30 days
SELECT employee_id, certification_name, expiry_date
FROM certifications
WHERE expiry_date < CURRENT_DATE + INTERVAL '30 days';

-- 5. Employees with overdue trainings
SELECT employee_id, training_id
FROM employee_trainings
WHERE status != 'completed'
  AND due_date < CURRENT_DATE;

-- 6. Top 5 employees by completed trainings
SELECT employee_id, COUNT(*) AS completed_count
FROM employee_trainings
WHERE status = 'completed'
GROUP BY employee_id
ORDER BY completed_count DESC
LIMIT 5;
