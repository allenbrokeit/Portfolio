export const MagneticButton = {
  extends: 'Button',
  theme: 'glass-elevated',
  padding: 'Z1 B',
  fontSize: 'Z',
  fontWeight: '600',
  borderRadius: 'Z',
  border: '1px solid cyber.25',
  color: 'cyber',
  cursor: 'pointer',
  transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background 0.3s ease',
  position: 'relative',
  zIndex: '1',

  onMouseMove: (e, el) => el.call('applyMagnetic', e),
  onMouseLeave: (e, el) => el.call('resetMagnetic'),

  ':hover': {
    borderColor: 'cyber.5',
    background: 'cyber.08',
  },

  ':active': {
    transform: 'scale(0.97)',
  },
}
