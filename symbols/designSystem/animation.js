export default {
  // Default template animations
  fadeInUp: {
    from: {
      transform: 'translate3d(0, 12.5%, 1px)',
      opacity: 0,
    },
    to: {
      transform: 'translate3d(0, 0, 1px)',
      opacity: 1,
    },
  },
  fadeOutDown: {
    from: {
      transform: 'translate3d(0, 0, 1px)',
      opacity: 1,
    },
    to: {
      transform: 'translate3d(0, 12.5%, 1px)',
      opacity: 0,
    },
  },
  marquee: {
    from: {
      transform: 'translate3d(0, 0, 1px)',
    },
    to: {
      transform: 'translate3d(-50%, 0, 1px)',
    },
  },

  // Portfolio animations
  orbFloat: {
    '0%': {
      transform: 'translate3d(0, 0, 1px)',
    },
    '33%': {
      transform: 'translate3d(5%, -8%, 1px)',
    },
    '66%': {
      transform: 'translate3d(-3%, 4%, 1px)',
    },
    '100%': {
      transform: 'translate3d(0, 0, 1px)',
    },
  },
  orbColorShift: {
    '0%': {
      opacity: 0.4,
    },
    '50%': {
      opacity: 0.6,
    },
    '100%': {
      opacity: 0.4,
    },
  },
  pulseGlow: {
    '0%': {
      boxShadow: '0 0 0 0 rgba(0, 240, 255, 0.4)',
    },
    '70%': {
      boxShadow: '0 0 0 10px rgba(0, 240, 255, 0)',
    },
    '100%': {
      boxShadow: '0 0 0 0 rgba(0, 240, 255, 0)',
    },
  },
}
