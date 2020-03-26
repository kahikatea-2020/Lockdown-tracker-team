const request = require("supertest");
const server = require("./server");
const utils = require("./utils");

// test the function for incrementing and decrementing the progressHours
test("Increment or Decrement progress", done => {
  const data = {
    id: 1,
    goal: "guitar practice",
    targetHours: 20,
    progressHours: 1,
    color: blue
  };

  utils.addTime(data, (err, result) => {
    expect(result.progressHours).toBe(2);
    done();
  });
});
