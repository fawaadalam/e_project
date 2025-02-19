const btn = document.querySelector(".button");
const feedback = document.querySelector(".feedback-container");
btn.addEventListener("click", () =>{
    feedback.innerHTML = `<h1>Thanks for your feedback</h1>`;
});