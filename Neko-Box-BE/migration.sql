DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    audience VARCHAR(255),
    rating INTEGER
);

INSERT INTO shows (name, category, description, audience, rating) VALUES

('Berserk', 'Seinen', 'DESCRIPTION', 'Mature', 5),

('Attack On Titan', 'Shonen', 'DESCRIPTION', 'Teen', 5),

('Sailor Moon', 'Shoujo', 'DESCRIPTION', 'Kids', 5),

('Bunny Drop', 'Josei', 'DESCRIPTION', 'Teen', 3 ),

('Ms. Koboyashi: Dragon Maid', 'Slice of Life', 'DESCRIPTION', 'Teen', 4);