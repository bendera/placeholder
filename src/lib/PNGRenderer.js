class PNGRenderer {
  constructor () {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
  }

  render (data) {
    this.canvas.setAttribute('width', data.width)
    this.canvas.setAttribute('height', data.height)
    this.ctx.clearRect(0, 0, data.width, data.height)
    this.ctx.fillStyle = data.backgroundColor
    this.ctx.fillRect(0, 0, data.width, data.height)

    this.ctx.font = `48px ${data.fontFamily}`
    this.ctx.textBaseline = 'middle'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = data.textColor
    this.ctx.fillText(data.caption, data.width / 2, data.height / 2)

    return this.canvas.toDataURL()
  }
}

export default PNGRenderer
