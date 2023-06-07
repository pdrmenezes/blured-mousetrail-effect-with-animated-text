const blob = document.getElementById('blob')
document.body.onpointermove = event => {
  const { clientX, clientY } = event

  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 5000, fill: 'forwards' })

}

const letters = 'AVCDEFGHIJKLMNOPQRSTUVWXYZ'
document.querySelector('h1').onmouseover = event => {
  let iterations = 0
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split('').map((_, index) => {
      if (index < iterations) {
        return event.target.dataset.value[index]
      }
      return letters[Math.floor(Math.random() * 26)]
    }).join('')
    iterations += 1 / 3
    if (iterations >= event.target.dataset.value.length) clearInterval(interval)
  }, 30)
}