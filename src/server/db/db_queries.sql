CREATE SCHEMA meetup_db;
USE meetup_db;

CREATE TABLE users (
	id VARCHAR(36) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE,
    display_name VARCHAR(35) NOT NULL,
    password CHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

CREATE TABLE events (
	id VARCHAR(36) NOT NULL,
    create_at TIMESTAMP DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

CREATE TABLE rsvps (
	event_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    
	PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (user_id) REFERENCES events (id)
);

CREATE TABLE topics (
    title VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    event_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    
    PRIMARY KEY (event_id, user_id),
    FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (user_id) REFERENCES events (id)
);

CREATE TABLE participants (
    event_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    
	PRIMARY KEY (event_id, user_id),
	FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (user_id) REFERENCES events (id)
);