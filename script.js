// let icon = document.getElementById("icon");
// let body = document.querySelector("body");

// icon.addEventListener("click",function(){
//   body.classList.toggle("active");

//   if(body.className == "active"){
//     icon.className = "fa-regular fa-sun";
//   } else{
//     icon.className = "fa-moon fa-solid";
//   }
// });

let icon = document.getElementById("icon");
let body = document.querySelector("body");

icon.addEventListener("click", function() {
    body.classList.toggle("active");

    if (body.classList.contains("active")) {
        // Switch to Sun icon for light mode option
        icon.classList.replace("fa-moon", "fa-sun");
        icon.classList.replace("fa-solid", "fa-regular");
    } else {
        // Switch back to Moon icon
        icon.classList.replace("fa-sun", "fa-moon");
        icon.classList.replace("fa-regular", "fa-solid");
    }
});