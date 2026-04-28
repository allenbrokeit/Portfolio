export const BentoProjectGrid = {
  tag: 'section',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 'A',
  padding: '0 B',
  maxWidth: '90%',
  margin: '0 auto',
  position: 'relative',
  zIndex: '1',

  attr: {
    'aria-label': 'Project showcase grid',
  },

  '@tabletS': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@mobileL': {
    gridTemplateColumns: '1fr',
    padding: '0 A',
  },

  SectionTitle: {
    tag: 'h2',
    gridColumn: '1 / -1',
    text: 'Featured Projects',
    fontSize: 'D',
    fontWeight: '700',
    color: 'white',
    marginBottom: 'A',
    '@mobileL': {
      fontSize: 'C',
    },
  },

  ProjectsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 'A',
    gridColumn: '1 / -1',

    '@tabletS': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@mobileL': {
      gridTemplateColumns: '1fr',
    },

    children: (el, s) => s.root.projects,
    childExtends: 'InteractiveProjectTile',
    childrenAs: 'state',
  },
}
