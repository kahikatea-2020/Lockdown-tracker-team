const path = require("path");
const fs = require("fs");

module.exports = {
  addTime,
  readGoal,
  readAllGoal,
  editGoal,
  addGoal
};

const fileName = path.resolve("user.json");

function addTime(data, callBack) {
  fs.readFile(fileName, (err, contents) => {
    if (err) return new Error("unable to load");
    const json = JSON.parse(contents);
    const index = data.id - 1;
    json.goals[index].progressHours = json[index].progressHours + data.hours;
    const string = JSON.stringify(json, null, 2);
    fs.writeFile(fileName, string, "utf-8", callBack);
  });
}

function readAllGoal(callback) {
  fs.readFile(fileName, (err, result) => {
    if (err) return callback(new Error("unable to read file"));
    try {
      const parseData = JSON.parse(result);
      callback(null, parseData);
    } catch (parseError) {
      callback(new Error("Cannot parse data"));
    }
  });
}

function addGoal(data, callback) {
  const { goal, targetHours, progressHours, color } = data;
  readAllGoal((err, viewData) => {
    try {
      let lastIndex = viewData.goals.reduce((a, v) =>
        a.id > v.id ? a : (a = v)
      ).id;
      let newData = viewData;
      newData.goals.push({
        id: Number(lastIndex) + 1,
        goal,
        targetHours,
        progressHours,
        remainingHours: 0,
        color
      });
      fs.writeFile(fileName, JSON.stringify(newData, null, 2), e => {
        if (e) return callback("error in writing");
        callback(null, newData);
      });
    } catch {
      console.log("add goal error");
    }
  });
}

function readGoal(id, callback) {
  fs.readFile(fileName, (err, result) => {
    if (err) return callback(new Error("unable to read file"));
    try {
      const parseData = JSON.parse(result);
      const select = parseData.goals.find(g => g.id == id);
      callback(null, select);
    } catch (parseError) {
      callback(new Error("Cannot parse data"));
    }
  });
}

function editGoal(id, progressHours, callback) {
  readAllGoal((err, viewData) => {
    if (err) return callback("Error in reading goal");
    try {
      let newData = {};
      const vData = viewData;
      newData.goals = vData.goals.map(g => {
        if (g.id == id) {
          return {
            id,
            goal: g.goal,
            targetHours: g.targetHours,
            progressHours: g.progressHours + Number(progressHours),
            remainingHours: g.remainingHours - Number(progressHours),
            color: g.color,
            image: g.image
          };
        }
        return g;
      });
      fs.writeFile(fileName, JSON.stringify(newData, null, 2), e => {
        if (e) return callback("Error in writing edit goal");
        callback(null, newData);
      });
    } catch {
      console.log("Error in edit Goal");
    }
  });
}
