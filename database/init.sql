CREATE TABLE data (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    value INTEGER NOT NULL
);

INSERT INTO data (name, value) VALUES
    ('Sample 1', 100),
    ('Sample 2', 200),
    ('Sample 3', 300);