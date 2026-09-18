-- Create sequence for provinces table id column
CREATE SEQUENCE IF NOT EXISTS provinces_id_seq
    START WITH 101
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- Alter the provinces table to use the sequence as default for id column
ALTER TABLE provinces
ALTER COLUMN id SET DEFAULT nextval('provinces_id_seq');

-- Set the sequence to start after existing data
SELECT setval('provinces_id_seq', (SELECT MAX(id) FROM provinces) + 1);
