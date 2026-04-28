export const InteractiveProjectTile = {
  extends: 'GlassCard',
  cursor: 'pointer',
  transition: 'transform 0.15s ease-out, border-color 0.3s ease',
  willChange: 'transform',

  onMouseMove: (e, el) => el.call('applyTilt', e),
  onMouseLeave: (e, el) => el.call('resetTilt'),

  attr: {
    'aria-label': (el, s) => 'Project: ' + (s.title || ''),
  },

  TileContent: {
    flow: 'y',
    gap: 'A',

    TileHeader: {
      flow: 'x',
      align: 'center space-between',
      gap: 'Z',

      TileTitle: {
        tag: 'h3',
        text: (el, s) => s.title,
        fontSize: 'A',
        fontWeight: '700',
        color: 'white',
        lineHeight: '1.2',
      },

      TileLinkIcon: {
        extends: 'Icon',
        icon: 'externalLink',
        width: 'A',
        height: 'A',
        color: 'cyber',
        opacity: '.5',
        transition: 'opacity 0.2s ease',
        ':hover': {
          opacity: '1',
        },
      },
    },

    TileSummary: {
      text: (el, s) => s.summary,
      fontSize: 'Z',
      color: 'paragraph',
      lineHeight: '1.6',
    },

    TileTagList: {
      flow: 'x',
      flexWrap: 'wrap',
      gap: 'Y',
      marginTop: 'Y',
      children: (el, s) => (s.tags || []).map(function mapTag(tag) { return { text: tag } }),
      childExtends: 'TechBadge',
    },
  },

  // Bento size variants using isX pattern
  isLarge: (el, s) => s.bentoSize === 'large',
  '.isLarge': {
    gridColumn: 'span 2',
    '@mobileL': {
      gridColumn: 'span 1',
    },
  },

  isMedium: (el, s) => s.bentoSize === 'medium',
  '.isMedium': {
    gridColumn: 'span 1',
  },
}
