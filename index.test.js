const request = require("supertest");
const server = require("./server");
const jest = require("jest");

const data = {
  goals: [
    {
      id: "1",
      goal: "guitar practice",
      targetHours: 20,
      progressHours: 7,
      remainingHours: 13,
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: "2",
      goal: "reading",
      targetHours: 10,
      progressHours: 0,
      remainingHours: 10,
      color: "red",
      image:
        "https://images.unsplash.com/photo-1553729784-e91953dec042?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      id: "3",
      goal: "cooking",
      targetHours: 15,
      progressHours: 0,
      remainingHours: 15,
      color: "green",
      image:
        "https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80"
    }
  ]
};

// xtest("Get object when adding a list", done => {
//   jest.mock("./", () => ({
//     someMethod: "Method"
//   }));

//   request(server)
//     .post("/test/add")
//     .set()
//     .end((err, res) => {
//       console.log(res);
//     });
// });

test("");
