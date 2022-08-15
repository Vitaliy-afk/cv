let box = document.querySelectorAll('li');
window.setInterval(function() {
  box.forEach(el => el.classList.remove('flipped'));
  let boxIndex = Math.floor(Math.random() * 36);
  box[boxIndex].classList.add('flipped');
}, 2000)