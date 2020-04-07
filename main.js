// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartLis = document.getElementsByClassName("like")
Array.from(heartLis).forEach(heartLi => {
    heartLi.addEventListener("click", function(e) {

        let errorParent = document.querySelector("#modal")
        let errorMes = document.querySelector("#modal-message")
        mimicServerCall()
            .then(resp => resp.json)
            .then(data => {
                let heart = document.querySelector(".like-glyph")
                if (heart.classList.contains("activated-heart")) {
                    heart.classList.remove("activated-heart")
                    heart.innerText = EMPTY_HEART
                } else {
                    heart.classList.add("activated-heart")
                    heart.innerText = FULL_HEART
                }
            })
            .catch(function(error) {
                errorMes.innerHTML = error
                errorParent.classList.remove("hidden")
                setTimeout(function() {
                    errorParent.classList.add("hidden")
                    console.log(errorParent)
                }, 5000);

            })
    })
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
                reject("Random server error. Try again.");
            } else {
                resolve("Pretend remote server notified of action!");
            }
        }, 300);
    });
}