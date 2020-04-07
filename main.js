// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
const modal = document.querySelector('#modal')
modal.className = "hidden"
const errorP = document.querySelector('#modal-message')

const likes = document.querySelectorAll('li.like')
likes.forEach( li => {
  li.addEventListener('click', (e) => {
    let likeGlyph = li.querySelector('.like-glyph')
    mimicServerCall()
    .then( response => response.json)
    .then(data => {
      console.log("redify that heart!")
      if (likeGlyph.textContent === EMPTY_HEART) {
        likeGlyph.textContent = FULL_HEART
        likeGlyph.className = "like-glyph activated-heart"
      } else {
        likeGlyph.textContent = EMPTY_HEART
        likeGlyph.className = "like-glyph"
      }
    })
    .catch(error => {

      errorP.textContent = error
      modal.className = ""
      window.setTimeout(() => {modal.className = "hidden"}, 5000)
    
    })
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
