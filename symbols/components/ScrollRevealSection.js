export const ScrollRevealSection = {
  tag: 'section',
  flow: 'y',
  position: 'relative',
  zIndex: '1',

  onRender: (el) => {
    if (el.__initialized) return
    el.__initialized = true
    el.call('initScrollReveal')
  },
}
