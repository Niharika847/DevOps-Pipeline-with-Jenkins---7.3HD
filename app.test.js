const request = require("supertest");
const app = require("./app");

describe("DevOps HD Pipeline App Tests", () => {
  test("GET / should return success message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("DevOps HD Pipeline App");
  });

  test("GET /health should return application health status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});