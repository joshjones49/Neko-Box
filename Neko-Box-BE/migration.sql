DROP TABLE IF EXISTS shows

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    viewer_rating VARCHAR(255),
    quality_rating INTEGER
)