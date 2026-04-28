export const SpotlightWrapper = {
  position: 'relative',
  overflow: 'hidden',

  onMouseMove: (e, el) => {
    var rect = el.node.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top
    el.node.style.setProperty('--spotlight-x', x + 'px')
    el.node.style.setProperty('--spotlight-y', y + 'px')
  },

  onMouseLeave: (e, el) => {
    el.node.style.removeProperty('--spotlight-x')
    el.node.style.removeProperty('--spotlight-y')
  },

  style: {
    background: 'radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(0, 240, 255, 0.04), transparent 40%)',
  },
}
