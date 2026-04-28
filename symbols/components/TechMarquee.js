export const TechMarquee = {
  flow: 'y',
  gap: 'B',
  overflow: 'hidden',
  padding: 'C 0',
  position: 'relative',
  zIndex: '1',

  attr: {
    'aria-label': 'Technology skills marquee',
  },

  MarqueeTitle: {
    tag: 'h3',
    text: 'Tech Ecosystem',
    fontSize: 'C',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: 'A',
  },

  MarqueeTrack: {
    flow: 'x',
    gap: 'Z',
    width: 'max-content',
    animation: 'marquee 30s linear infinite',

    MarqueeSet1: {
      flow: 'x',
      gap: 'Z',
      children: (el, s) => (s.root.profile.coreSkills || []).map(function mapSkill(skill) { return { text: skill } }),
      childExtends: 'TechBadge',
    },

    MarqueeSet2: {
      flow: 'x',
      gap: 'Z',
      children: (el, s) => (s.root.profile.coreSkills || []).map(function mapSkill(skill) { return { text: skill } }),
      childExtends: 'TechBadge',
    },
  },
}
