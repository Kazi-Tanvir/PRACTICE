-- ==========================================================================
-- 1. CREATE: Insert new records into the users table
-- ==========================================================================
INSERT INTO users (name, email, gender, date_of_birth, salary)
VALUES ('Alice', 'alice@example.com', 'Female', '1995-05-14', 65000);
INSERT INTO users (name, email, gender, date_of_birth, salary)
VALUES ('Bob', 'bob@example.com', 'Male', '1990-11-23', 70000),
       ('Charlie', 'charlie@example.com', 'Other', '1988-02-17', 60000);
-- ==========================================================================
-- 2. READ: Select data from the users table
-- ==========================================================================
SELECT * FROM users;
SELECT name, email FROM users;
SELECT * FROM users WHERE gender = 'Female';
-- ==========================================================================
-- 3. UPDATE: Modify existing records
-- ==========================================================================
UPDATE users
SET name = 'Alicia'
WHERE id = 1;

UPDATE users
SET name = 'Robert', email = 'robert@example.com'
WHERE id = 2;

UPDATE users
SET salary = salary + 10000
WHERE salary < 60000;
-- ==========================================================================
-- 4. DELETE: Remove records from the users table
-- ==========================================================================
DELETE FROM users WHERE id = 3;
DELETE FROM users WHERE salary < 50000;

