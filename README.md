# PROJECT SETUP:

- Clone the repo
- Create a database using render
  -Install project dependencies
  -Create .env file and add to gitignore
  -Create a new database

## MAKE:

-Plan new schema
-Create ERD using Mermaid
-Edit the reset-database.js ensuring it reflects the new Schema
-Run the 'npm run reset-database' command to checkthe script works

## USE EXISTING:

1. Begin to make the get handlers and helper functions work

- create query string in helper function,
- pool query string accessing database,
- return result.rows,
- in app.js await for a data from body request,
- send back response containing data,
- catch any errors.

2. Make a POST requests working
