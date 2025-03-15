DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    viewer_rating VARCHAR(255),
    quality_rating INTEGER
);

INSERT INTO shows (name, category, description, viewer_rating, quality_rating) VALUES

('Berserk', 'Seinen', 'DESCRIPTION', 'Mature', 5),

('Attack On Titan', 'Shonen', 'DESCRIPTION', 'Teen', 5),

('Sailor Moon', 'Shoujo', 'DESCRIPTION', 'Kids', 5),

('Bunny Drop', 'Josei', 'DESCRIPTION', 'Teen', 3 ),

('Ms. Koboyashi: Dragon Maid', 'Slice of Life', 'DESCRIPTION', 'Teen', 4);