// This module should contain the functions for adding, editing our data
module.exports = {};

function addTime(data, callBack) {
  const fileName = path.join(__dirname, +"user.json");
  fs.readFile(fileName, (err, contents) => {
    if (err) return console.log(`can't load`);
    const json = JSON.parse(contents);
    const index = data.id + 1;
    json[index].progressHours = json[index].progressHours + data.hours;
    const string = JSON.stringify(json, null, 2);
    fs.writeFile(fileName, string, "utf-8", callBack);
  });
}

let data = {
  id: 1
};

// addTime(data, err)

// //control width of 'green' div for the progress bar state
// class ProgressBar {
//   constructor(element, initialValue = 0) {
//     this.valueElem = element.querySelector(".progress-bar-value");
//     this.fillElem = element.querySelector(".progress-bar-fill");

//     this.setValue(initialValue);

//     //console.log(this.valueElem);
//     //console.log(this.fillElem);
//   }

//   //define setValue method
//   setValue(newValue) {
//     if (newValue < 0) {
//       newValue = 0;
//     }

//     if (newValue > 100) {
//       newValue = 100;
//     }

//     this.value = newValue;
//     this.update();
//   }

//   //update method
//   update() {
//     const percentage = this.value + "%";

//     //change text content and value of div
//     this.fillElem.style.width = percentage;
//     this.valueElem.textContent = percentage;
//   }
// }

// //create an instance of ProgressBar class
// const progressBar1 = new ProgressBar(
//   document.querySelector(".progress-bar"),
//   40
// ); /*** in devTools -console - progressBar1.setValue(whatever#) to see in action ***/
