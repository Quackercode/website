const dvdLogo = "qc_logo_s.png"
  document.body.style.backgroundColor = "black"
  const colors = ["red", "green", "blue", "yellow", "orange", "purple"]

  function loop() {
    const hRange = window.innerWidth - dvdLogo.clientWidth
    const vRange = window.innerHeight - dvdLogo.clientHeight
    const time = performance.now() * 0.2

    const x = Math.abs((time % (hRange * 2)) - hRange)
    dvdLogo.style.left = `${x}px`
    const y = Math.abs((time % (vRange * 2)) - vRange)
    dvdLogo.style.top = `${y}px`

    const bounces = Math.floor(time / hRange) + Math.floor(time / vRange)
    dvdLogo.style.fill = colors[bounces % colors.length]

    requestAnimationFrame(loop)
  }
  loop()
