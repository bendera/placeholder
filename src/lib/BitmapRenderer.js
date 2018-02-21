class BitmapRenderer {
  constructor () {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
  }

  render (data, ...opts) {
    this.canvas.setAttribute('width', data.width)
    this.canvas.setAttribute('height', data.height)
    this.ctx.clearRect(0, 0, data.width, data.height)
    this.ctx.fillStyle = data.backgroundColor
    this.ctx.fillRect(0, 0, data.width, data.height)

    this.ctx.font = `${data.fontWeight} ${data.fontSize}px ${data.fontFamily}`
    this.ctx.textBaseline = 'middle'
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = data.textColor
    this.ctx.fillText(data.caption, data.width / 2, data.height / 2)

    if (opts && opts.length === 1) {
      return this.canvas.toDataURL(opts[0])
    }
    else if (opts && opts.length === 2) {
      return this.canvas.toDataURL(opts[0], opts[1])
    }
    else {
      return this.canvas.toDataURL()
    }
  }
}

export default BitmapRenderer
