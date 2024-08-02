// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
import {
  getDirectors,
  getDirector,
  createResourceOne,
  updateResourceOneById,
  deleteResourceOneById,
} from "./directors.js";

// Import your helper functions for your second resource here
// import {
//   getResourceTwo,
//   getResourceTwoById,
//   createResourceTwo,
//   updateResourceTwoById,
//   deleteResourceTwoById,
// } from "./resource_two.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Resource One Route Handlers

// Endpoint to retrieve all directors information for every director
app.get("/directors/", async function (req, res) {});

// Endpoint to retrieve a <resource_one> by id
app.get("/directors/:id", async function (req, res) {});

// Endpoint to create a new <resource_one>
app.post("/resourceone/", async function (req, res) {});

// Endpoint to update a specific <resource_one> by id
app.patch("/resourceone/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_one> by id
app.delete("/resourceone/:id", async function (req, res) {});

// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/resourcetwo/", async function (req, res) {
  const authors = await getAuthors();
  res.status(200).json({ status: "success", data: authors });
});

// Endpoint to retrieve a <resource_twos> by id
app.get("/resourcetwo/:id", async function (req, res) {});

// Endpoint to create a new <resource_twos>
app.post("/resourcetwo/", async function (req, res) {});

// Endpoint to update a specific <resource_twos> by id
app.patch("/resourcetwo/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_twos> by id
app.delete("/resourcetwo/:id", async function (req, res) {});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

// await function to retrieve all director information for every director
// try {
//   // Get data from helper function
//   const data = await getDirectors();
//   // Send back response if correct
//   res.status(200).json({ success: true, payload: data });
// } catch (error) {
//   console.error("Problem getting data");
//   // Send back response if incorrect
//   res.status(400).json({ success: false, payload: null });
// }

// try {
//   // Get current ID from request params
//   const id = req.params.id;
//   // Get data from helper function
//   const data = await getDirector(id);
//   res.status(200).json({ success: true, payload: data });
// } catch (error) {
//   console.log(error);
//   res.status(400).json({ success: false, payload: null });
// }
