CREATE TABLE IF NOT EXISTS Listings (
    id SERIAL PRIMARY KEY,
    city VARCHAR NOT NULL,
    price NUMERIC,
    address TEXT,
    number_beds INTEGER,
    number_baths INTEGER,
    province VARCHAR,
    population INTEGER,
    latitude NUMERIC,
    longitude NUMERIC,
    median_family_income NUMERIC
)