export default function SectionHeader({ label, title, light = false }) {
  // Split on <br/> instead of dangerouslySetInnerHTML
  const parts = title.split('<br/>')

  return (
    <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.75rem',
        fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: light ? 'rgba(245,242,235,0.35)' : 'var(--muted)',
        marginBottom: '1rem',
      }}>
        <span style={{
          display: 'block', width: 20, height: 1.5,
          background: 'currentColor', flexShrink: 0,
        }} />
        {label}
      </div>
      <h2 style={{
        fontFamily: 'var(--ff-display)',
        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
        fontWeight: 800,
        lineHeight: 1.02,
        letterSpacing: '-0.03em',
        color: light ? 'var(--off-white)' : 'var(--black)',
      }}>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < parts.length - 1 && <br />}
          </span>
        ))}
      </h2>
    </div>
  )
}
