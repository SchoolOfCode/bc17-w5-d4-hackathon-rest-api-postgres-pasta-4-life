# PROJECT SETUP:

- Clone the repo
- Create a database using render
  -Install project dependencies
  -Create .env file and add to gitignore
  -Create a new database

## MAKE:

- Plan new schema
- Create ERD using Mermaid
- Edit the reset-database.js ensuring it reflects the new Schema
- Run the 'npm run reset-database' command to checkthe script works

## USE EXISTING:

#### Response structure: {success: boolean, payload: data}

1. #### Begin to make the get handlers and helper functions work

- create query string in helper function,
- pool query string accessing database,
- return result.rows,
- in app.js await for a data from helper function,
- send back response containing data (res 200),
- catch any errors.

2. #### Make a POST requests working

- create query string in helper function (dynamic values for object properties - $1, $2),
- create a new director from body request,
- pool query string accessing database,
- return result.rows[0],
- in app.js await for a data from helper function,
- send back response containing data (res 200),
- catch any errors.
