-- Your SQL goes here
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    cover VARCHAR NOT NULL,
    rating INT NOT NULL
)
