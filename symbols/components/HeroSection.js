export const HeroSection = {
  tag: 'section',
  flow: 'y',
  align: 'center center',
  minHeight: '100vh',
  position: 'relative',
  zIndex: '1',
  padding: 'D B',
  gap: 'B',
  textAlign: 'center',

  attr: {
    'aria-label': 'Hero introduction section',
  },

  HeroContent: {
    flow: 'y',
    align: 'center center',
    gap: 'A',
    maxWidth: '80%',

    HeroTitle: {
      tag: 'h1',
      text: (el, s) => s.root.profile.name,
      fontSize: 'H',
      fontWeight: '800',
      letterSpacing: '-0.04em',
      lineHeight: '0.9',
      color: 'white',
      '@tabletS': {
        fontSize: 'G',
      },
      '@mobileL': {
        fontSize: 'F',
      },
    },

    HeroHeadline: {
      tag: 'h2',
      text: (el, s) => s.root.profile.headline,
      fontSize: 'B',
      fontWeight: '400',
      color: 'caption',
      lineHeight: '1.4',
      maxWidth: '70%',
      '@mobileL': {
        fontSize: 'A',
      },
    },

    HeroMeta: {
      flow: 'x',
      flexWrap: 'wrap',
      align: 'center center',
      gap: 'A',
      marginTop: 'Z',

      LocationMeta: {
        flow: 'x',
        align: 'center center',
        gap: 'Y',
        color: 'paragraph',
        LocationIcon: {
          extends: 'Icon',
          icon: 'mapPin',
          width: 'A',
          height: 'A',
          color: 'cyber',
        },
        LocationText: {
          tag: 'span',
          text: (el, s) => s.root.profile.location,
          fontSize: 'Z',
        },
      },

      StatusMeta: {
        flow: 'x',
        align: 'center center',
        gap: 'Y',
        color: 'paragraph',
        StatusIcon: {
          extends: 'Icon',
          icon: 'briefcase',
          width: 'A',
          height: 'A',
          color: 'neon',
        },
        StatusText: {
          tag: 'span',
          text: (el, s) => s.root.profile.status,
          fontSize: 'Z',
        },
      },
    },
  },

  ScrollIndicator: {
    position: 'absolute',
    bottom: 'C',
    flow: 'y',
    align: 'center center',
    gap: 'Y',
    opacity: '.5',
    animation: 'fadeInUp 2s ease-in-out infinite alternate',

    ScrollIcon: {
      extends: 'Icon',
      icon: 'chevronDown',
      width: 'B',
      height: 'B',
      color: 'cyber',
    },
  },
}
