// document.getElementById("cust")
// document.getElementsByClassName();
// document.getElementsByTagName("p")
// document.body

let el = (el) => document.querySelector(el);
let bar = el("#customProgressbar").querySelector(".progress-bar");
let fill = el("#fill");
let clear = el("#clear");

let i = 0;
fill.addEventListener("click", (cb) => {
  let interval = setInterval(timer, 100);

  function timer() {
    i++;
    if (i < 100) {
      bar.style.width = i + "%";
      bar.textContent = i + "%";

      if (i === 99) {
        setTimeout(function () {
          bar.style.width = "100%";
          bar.textContent = "100%";
          bar.style.backgroundColor = "green";
          bar.textContent = "Upload Completed";
        }, 3000);
      }
    }
  }

  clear.addEventListener("click", () => {
    clearInterval(interval);
    i = 0;
    bar.style.width = "0%";
    bar.textContent = "0%";
    bar.style.backgroundColor = "#007bff";
  });
});

(function () {
  setInterval(() => {
    el("#clock").textContent = new Date().toLocaleTimeString();
  }, 1000);
})();

var colors = ["red", "blue", "yellow"];
let index = Math.floor(Math.random() * 3 + 1);
setInterval(() => {
    console.log(index)
    console.log(colors[index])
}, 300)

// Implement a pause function
// Implement random colours
// read about AJAX (asynchronous javascript and XML)
// read about fetch API
// read more about functions, Objects, Arrays, Closure, Lexical Scope, recursion, Math
