const request = require("supertest");
const app = require("../../app");
const Bug = require("../../models/Bug");

// Set timeout to 30 seconds for all tests in this file
jest.setTimeout(30000);

describe("Bug API Endpoints", () => {
  let bugId;

  // Create a bug before running tests
  beforeAll(async () => {
    console.log("Creating a test bug...");
    const response = await request(app)
      .post("/api/bugs")
      .send({ title: "Test Bug", description: "This is a test bug" });
    console.log("Response from POST /api/bugs:", response.body); 
    bugId = response.body._id; 
    console.log("Test bug created with ID:", bugId);
  });
  // Delete the bug after running tests
  afterAll(async () => {
    console.log("Deleting test bugs...");
    await Bug.deleteMany({});
    console.log("Test bugs deleted.");
  });

  test("GET /api/bugs should return all bugs", async () => {
    console.log("Running GET /api/bugs test...");
    const response = await request(app).get("/api/bugs");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    console.log("GET /api/bugs test completed.");
  });

  test("PUT /api/bugs/:id should update a bug", async () => {
    console.log("Running PUT /api/bugs/:id test...");
    const response = await request(app)
      .put(`/api/bugs/${bugId}`)
      .send({ status: "in-progress" });
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("in-progress");
    console.log("PUT /api/bugs/:id test completed.");
  });

  test("DELETE /api/bugs/:id should delete a bug", async () => {
    console.log("Running DELETE /api/bugs/:id test...");
    const response = await request(app).delete(`/api/bugs/${bugId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Bug deleted");
    console.log("DELETE /api/bugs/:id test completed.");
  });
});