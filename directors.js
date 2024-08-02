// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getDirectors() {
  // Query the database and return all resource ones
  const query = "SELECT * FROM directors";
  // Result from pooling database
  const result = await pool.query(query);
  return result.rows;
}

export async function getDirectorsById(id) {
  // Query the database and return the resource with a matching id or null
  const query = "SELECT * FROM directors WHERE id = $1";
  // Result from pooling database
  const result = await pool.query(query, [id]);
  return result.rows[0] || null;
}

export async function createResourceOne(resource) {
  // Query the database to create an resource and return the newly created resource
}

export async function updateResourceOneById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteResourceOneById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}
