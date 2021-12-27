CREATE SCHEMA meetup_db;
USE meetup_db;

CREATE TABLE user (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
    email VARCHAR(254) NOT NULL UNIQUE,
    display_name VARCHAR(35) NOT NULL,
    password CHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    PRIMARY KEY (id)
);

CREATE TABLE meetup (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
    create_at TIMESTAMP DEFAULT NOW(),

    PRIMARY KEY (id)
);

CREATE TABLE rsvp (
	event_id MEDIUMINT NOT NULL,
    user_id MEDIUMINT NOT NULL,

	PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES meetup (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE topic (
    title VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    event_id MEDIUMINT NOT NULL,
    user_id MEDIUMINT NOT NULL,

    PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES meetup (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);

CREATE TABLE participant (
    event_id MEDIUMINT NOT NULL,
    user_id MEDIUMINT NOT NULL,

	PRIMARY KEY (event_id, user_id),
	FOREIGN KEY (event_id) REFERENCES meetup (id),
    FOREIGN KEY (user_id) REFERENCES user (id)
);