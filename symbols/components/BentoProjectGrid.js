export const BentoProjectGrid = {
  tag: 'section',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 'A',
  padding: '0 B',
  maxWidth: '90%',
  margin: '0 auto',
  position: 'relative',
  zIndex: '1',

  attr: {
    'aria-label': 'Project showcase grid',
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
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'A',
    gridColumn: '1 / -1',

    '@mobileL': {
      gridTemplateColumns: '1fr',
    },

    children: (el, s) => s.root.projects,
    childExtends: 'InteractiveProjectTile',
    childrenAs: 'state',
  },

  GridScrollIndicator: {
    gridColumn: '1 / -1',
    flow: 'y',
    align: 'center center',
    gap: 'Y',
    marginTop: 'B',
    opacity: '.5',
    cursor: 'pointer',
    animation: 'fadeInUp 2s ease-in-out infinite alternate',
    transition: 'opacity 0.2s ease',

    ':hover': {
      opacity: '1',
    },

    onClick: (e, el) => {
      var target = document.getElementById('contact')
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    },

    GridScrollIcon: {
      extends: 'Icon',
      icon: 'chevronDown',
      width: 'B',
      height: 'B',
      color: 'cyber',
    },
  },
}
