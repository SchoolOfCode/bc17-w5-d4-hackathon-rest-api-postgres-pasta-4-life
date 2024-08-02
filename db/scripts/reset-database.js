import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE movies AND directors <<<

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS directors CASCADE;
        DROP TABLE IF EXISTS movies CASCADE;
    `);

    // Create the directors table
    await pool.query(`
        CREATE TABLE directors (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
    `);

    // Create the movies table with a foreign key to the directors table
    await pool.query(`
        CREATE TABLE movies (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            published_date DATE,
            director_id INT REFERENCES directors(id)
        );
    `);

    // Seed the directors table
    await pool.query(`
        INSERT INTO directors (name)
        VALUES 
            ('Steven Spielberg'),
            ('Martin Scorsese');
    `);

    // Seed the movies table
    await pool.query(`
        INSERT INTO movies (title, published_date, director_id)
        VALUES 
            ('Alien', '2017-06-02', 1),
            ('Once Upon a time in Hollywood', '2020-03-27', 1),
            ('Django', '1996-06-25', 2),
            ('Vertigo', '2001-09-11', 2);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
