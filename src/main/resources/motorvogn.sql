CREATE TABLE motorvogn
(
    personnummer CHAR(11),
    navn VARCHAR(20),
    adresse VARCHAR(30),
    kjennetegn CHAR(7),
    merke VARCHAR(15),
    type VARCHAR(15),
    PRIMARY KEY (kjennetegn)
);