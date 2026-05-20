export default function Before() {
  const problems = [
    { stat: '0', label: 'documented workflows', detail: 'Everything lived in people\'s heads. No handoff process, no intake standard, no visibility into who was doing what.' },
    { stat: '2+ hrs', label: 'lost daily to manual task creation', detail: 'Every task created by hand. Copy-pasted across tools. No structure, no tracking, prone to error every single time.' },
    { stat: '40+', label: 'brands, zero standardization', detail: 'Each brand handled differently. No common format, no shared knowledge. New joiner? Start from zero.' },
    { stat: 'Daily', label: 'standups just to know task status', detail: 'The standup wasn\'t alignment — it was the only way anyone knew what was happening. A system failure masking as culture.' },
  ]

  return (
    <section id="before" style={{ background: 'var(--black)', color: 'var(--off-white)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,242,235,0.35)',
            marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            The before state
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.03em',
            color: 'var(--off-white)', maxWidth: 600,
          }}>What was actually broken</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        }}>
          {problems.map((p, i) => (
            <div key={i} style={{
              background: 'var(--black)',
              padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
            }}>
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800, letterSpacing: '-0.04em',
                color: '#ef4444', lineHeight: 1,
              }}>{p.stat}</div>
              <div style={{
                fontFamily: 'var(--ff-display)', fontSize: '1rem',
                fontWeight: 700, letterSpacing: '-0.01em',
                color: 'var(--off-white)',
              }}>{p.label}</div>
              <p style={{
                fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7,
                color: 'rgba(245,242,235,0.45)',
                marginTop: '0.25rem',
              }}>{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
