DROP TABLE IF EXISTS Chair;
CREATE TABLE Chair (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR(31) NOT NULL,
);

INSERT INTO Chair (id, comment)
VALUES (1, 'I have something important to say');
INSERT INTO Teams (id, comment)
VALUES (2, 'D&S is awesome');
INSERT INTO Teams (id, comment)
VALUES (3, '😁');
