-- CREATE DATABASE "full-stack-react";

-- Table structure
CREATE TABLE creatures (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	origin VARCHAR(50) NOT NULL
);

INSERT INTO creatures (name, origin)
VALUES ('Jakalope', 'USA'), 
('Chupacabra', 'Mexico'), 
('Phoenix', 'Saudi Arabia');

ALTER TABLE creatures
ADD COLUMN sightings INT DEFAULT 0,
ADD COLUMN color VARCHAR(25) DEFAULT 'teal';