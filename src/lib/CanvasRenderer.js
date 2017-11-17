class CanvasRenderer {
  constructor () {
    this.canvas = document.createElement('canvas')
    this.canvas.setAttribute('width', 150)
    this.canvas.setAttribute('height', 150)

    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
      console.log(this.ctx)
    }
  }

  draw (w, h, textColor, backgroundColor) {
    this.ctx.fillRect(25, 25, 100, 100)
    this.ctx.clearRect(45, 45, 60, 60)
    this.ctx.strokeRect(50, 50, 50, 50)
  }

  getDataURI () {
    this.draw()

    return this.canvas.toDataURL()
  }
}

export default CanvasRenderer
