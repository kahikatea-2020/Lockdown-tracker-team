const request = require("supertest");
const server = require("./server");
const jest = require("jest");

xtest("Get object when adding a list", done => {
  jest.mock("./", () => ({
    someMethod: "Method"
  }));

  request(server)
    .post("/test/add")
    .set()
    .end((err, res) => {
      console.log(res);
    });
});

test();
