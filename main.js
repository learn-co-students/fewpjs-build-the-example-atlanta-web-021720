// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  let errorMessage = document.querySelector("#modal")
  errorMessage.classList.add("hidden")
  let likeBtn = document.querySelectorAll(".like-glyph")

likeBtn.forEach(btn => {
    btn.addEventListener("click", e => {

      mimicServerCall()
      .then(req => req.json)
      .then(data => {
        if(e.target.classList.contains("activated-heart")) {
          e.target.innerHTML = EMPTY_HEART
          e.target.classList.remove("activated-heart")
        } else {
          e.target.classList.add("activated-heart")
          e.target.innerHTML = FULL_HEART
        }
      })
      .catch(() => {
        errorMessage.classList.remove("hidden")
        setTimeout(() => {
          errorMessage.classList.add("hidden")
          console.log(errorMessage)
        }, 5000);
    })
    })
  })



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
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
