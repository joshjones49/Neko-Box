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

('Berserk', 'Seinen', 'BERSERK DESCRIPTION', 'Mature', 5),

('Attack On Titan', 'Shonen', 'AOT DESCRIPTION', 'Teen', 5),

('Sailor Moon', 'Shoujo', 'SAILOR MOON DESCRIPTION', 'Kids', 5),

('Bunny Drop', 'Josei', 'BUNNY DROP DESCRIPTION', 'Teen', 3 ),

('Ms. Koboyashi: Dragon Maid', 'Slice of Life', 'KOBOYASHI DESCRIPTION', 'Teen', 4);