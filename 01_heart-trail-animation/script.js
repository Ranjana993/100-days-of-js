const body_el = document.querySelector("body")


body_el.addEventListener("mousemove", (e) => {
  const xPosition = e.offsetX
  const yPosition = e.offsetY
  const spanEl = document.createElement("span");
  spanEl.style.left = xPosition + "px"
  spanEl.style.top = yPosition + "px"
  const size = Math.random() * 100;
  spanEl.style.width = size+"px"
  spanEl.style.height = size+"px"
  body_el.appendChild(spanEl)

  setTimeout(() => {
    spanEl.remove()
  }, 3000)

})