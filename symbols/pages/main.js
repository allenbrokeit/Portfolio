export const main = {
  extends: 'Page',
  flow: 'y',
  background: 'surface',
  position: 'relative',
  overflow: 'hidden',

  AmbientOrb: {},
  AmbientOrbSecondary: {},

  HeroSection: {},

  TechSection: {
    extends: 'ScrollRevealSection',
    TechMarquee: {},
  },

  ProjectSection: {
    extends: 'ScrollRevealSection',
    padding: 'D 0',
    SpotlightWrapper: {
      BentoProjectGrid: {},
    },
  },

  ContactReveal: {
    extends: 'ScrollRevealSection',
    ContactSection: {},
  },

  FooterBar: {
    tag: 'footer',
    flow: 'x',
    align: 'center center',
    padding: 'B',
    borderTop: '1px solid white.06',
    marginTop: 'D',

    FooterText: {
      text: '© 2026 Allen. Built with Symbols & DOMQL3.',
      fontSize: 'Y',
      color: 'disabled',
    },
  },
}
