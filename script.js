const closeBtn = document.getElementById("closebutton");
const cookieBtn = document.getElementById("cookiebtn");
const cookies = document.getElementById("cookie");

if(localStorage.getItem(cookies.id) === "hidden"){
    cookies.classList.add("hidden");
}

closeBtn.addEventListener("click",() => {
    cookies.classList.add("hidden");
});


cookieBtn.addEventListener("click",() => {
    cookies.classList.add("hidden");
    localStorage.setItem(cookies.id,"hidden");
});
