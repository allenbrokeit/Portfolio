export default {
  // Default template themes
  document: {
    '@dark': {
      background: 'surface',
      color: 'title',
    },
    '@light': {
      background: 'gray 1 +168',
      color: 'title',
    },
  },
  dialog: {
    '@dark': {
      background: 'gray 0.95 -68',
      color: 'title',
      backdropFilter: 'blur(3px)',
      borderColor: 'gray 0',
      outlineColor: 'blue',
    },
    '@light': {
      background: 'gray .95 +150',
      color: 'title',
      backdropFilter: 'blur(3px)',
      borderColor: 'gray 0',
      outlineColor: 'blue',
    },
  },
  field: {
    '@dark': {
      color: 'white',
      background: 'gray 0.95 -65',
      '::placeholder': {
        color: 'white 1 -78',
      },
    },
    '@light': {
      color: 'black',
      '::placeholder': {
        color: 'gray 1 -68',
      },
    },
  },
  primary: {
    '@dark': {
      background: 'blue',
      color: 'white',
    },
    '@light': {
      color: 'white',
      background: 'blue',
    },
  },
  warning: {
    '@dark': {
      background: 'red',
      color: 'white',
    },
    '@light': {
      color: 'white',
      background: 'red',
    },
  },
  success: {
    '@dark': {
      background: 'green',
      color: 'white',
    },
    '@light': {
      background: 'green',
      color: 'white',
    },
  },
  none: {
    color: 'none',
    background: 'none',
  },
  transparent: {
    color: 'currentColor',
    background: 'transparent',
  },

  // Portfolio "Cyber-Gloss" themes
  glass: {
    '@dark': {
      background: 'white.03',
      color: 'title',
      backdropFilter: 'blur(16px)',
      borderColor: 'white.08',
    },
    '@light': {
      background: 'gray.95+150',
      color: 'title',
      backdropFilter: 'blur(16px)',
      borderColor: 'gray.1',
    },
  },
  'glass-elevated': {
    '@dark': {
      background: 'white.06',
      color: 'title',
      backdropFilter: 'blur(24px)',
      borderColor: 'white.12',
    },
    '@light': {
      background: 'gray.9+140',
      color: 'title',
      backdropFilter: 'blur(24px)',
      borderColor: 'gray.15',
    },
  },
  hero: {
    '@dark': {
      background: 'surface',
      color: 'white',
    },
    '@light': {
      background: 'white',
      color: 'codGray',
    },
  },
  badge: {
    '@dark': {
      background: 'white.06',
      color: 'cyber',
      borderColor: 'cyber.15',
    },
    '@light': {
      background: 'blue.08',
      color: 'blue',
      borderColor: 'blue.2',
    },
  },
}
