export const TechBadge = {
  tag: 'span',
  theme: 'badge',
  padding: 'X Z',
  borderRadius: 'Y',
  border: '1px solid cyber.15',
  fontSize: 'Y',
  fontWeight: '500',
  letterSpacing: '0.02em',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',
  text: (el, s) => s.label || s.text || s,

  ':hover': {
    borderColor: 'cyber.35',
    background: 'cyber.08',
  },
}
