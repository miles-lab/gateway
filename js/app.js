let el = el => document.querySelector(el);
let bar = el("#customProgressbar").querySelector(".progress-bar");
let fill = el("#fill");
let clear = el("#clear");
// fill.addEventListener("click", (cb) => {
//     switch(bar.style.width){
//         case "0%":
//             bar.style.width = "25%";
//             bar.textContent = "25%";
//             break;
//         case "25%":
//             bar.style.width = "50%";
//             bar.textContent = "50%";
//             break;
//         case "50%":
//             bar.style.width = "75%";
//             bar.textContent = "75%";
//             break;
//         case "75%":
//             bar.style.width = "100%";
//             bar.textContent = "100%";
//             break;
//         default: false;
//     }
// })
// clear.addEventListener("click", () => bar.style.width = "0%"); 

// fill.addEventListener("click", (cb) => {
//     console.log(cb)
    
//     for(let i = 0; i < 100; i++){
//         setInterval(function(){
//             console.log(i)
//             bar.style.width = i+"%";
//             bar.textContent = i+"%";
//         }, 500)
//     }
// })