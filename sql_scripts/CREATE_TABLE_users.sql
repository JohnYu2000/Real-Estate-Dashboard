CREATE TABLE IF NOT EXISTS Users (
    useriD SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users (username, password, email) VALUES
('admin', 'admin', 'admin@example.com')
ON CONFLICT DO NOTHING;