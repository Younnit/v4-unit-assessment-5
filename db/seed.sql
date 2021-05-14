CREATE TABLE helo_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(70) NOT NULL,
    profile_pic text
);

CREATE TABLE helo_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    content VARCHAR(1500),
    img TEXT,
    author_id INTEGER REFERENCES helo_users(id),
    date_created TIMESTAMP
);