export const ContactSection = {
  flow: 'y',
  align: 'center center',
  gap: 'B',
  padding: 'F B',
  textAlign: 'center',
  position: 'relative',
  zIndex: '1',

  attr: {
    'aria-label': 'Contact section',
  },

  ContactTitle: {
    tag: 'h2',
    text: "Let's Build Something",
    fontSize: 'D',
    fontWeight: '700',
    color: 'white',
    '@mobileL': {
      fontSize: 'C',
    },
  },

  ContactSubtitle: {
    text: 'Open to new roles, collaborations, and challenging QA automation projects.',
    fontSize: 'A',
    color: 'paragraph',
    maxWidth: '60%',
    lineHeight: '1.6',
  },

  ContactCta: {
    extends: 'MagneticButton',
    text: 'Get in Touch',
    icon: 'mail',
  },

  SocialLinks: {
    flow: 'x',
    gap: 'B',
    marginTop: 'A',

    GithubLink: {
      extends: 'Link',
      href: 'https://github.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      flow: 'x',
      align: 'center center',
      gap: 'Y',
      color: 'caption',
      transition: 'color 0.2s ease',
      ':hover': {
        color: 'cyber',
      },
      GithubIcon: {
        extends: 'Icon',
        icon: 'github',
        width: 'B',
        height: 'B',
      },
    },

    LinkedinLink: {
      extends: 'Link',
      href: 'https://linkedin.com',
      target: '_blank',
      rel: 'noopener noreferrer',
      flow: 'x',
      align: 'center center',
      gap: 'Y',
      color: 'caption',
      transition: 'color 0.2s ease',
      ':hover': {
        color: 'cyber',
      },
      LinkedinIcon: {
        extends: 'Icon',
        icon: 'linkedin',
        width: 'B',
        height: 'B',
      },
    },
  },
}
