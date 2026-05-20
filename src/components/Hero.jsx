export default function Hero() {
  return (
    <header id="home" style={{
      background: 'var(--black)',
      minHeight: '100svh',
      display: 'grid',
      alignItems: 'end',
      paddingTop: 'calc(var(--nav-h) + 4rem)',
      paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--ff-display)',
        fontSize: 'clamp(100px, 22vw, 280px)',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.025)',
        pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.04em', whiteSpace: 'nowrap',
      }}>OPS</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* pill tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          background: 'var(--accent)', color: 'var(--black)',
          fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem', fontWeight: 700,
          padding: '0.5rem 1.25rem', borderRadius: 100,
          marginBottom: '2rem',
          letterSpacing: '0.07em', textTransform: 'uppercase',
        }}>
          <span>8 months</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>2 depts</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>AI-native ops</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', lineHeight: 1, letterSpacing: 0 }}>∞</span>
          <span>automation</span>
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(3.75rem, 9.5vw, 8rem)',
          fontWeight: 800,
          lineHeight: 0.88,
          letterSpacing: '-0.035em',
          color: 'var(--off-white)',
          marginBottom: '2rem',
        }}>
          Ops, I Did<br />
          It <em style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 400 }}>Again.</em>
        </h1>

        {/* description */}
        <p style={{
          maxWidth: 500,
          fontSize: '1.125rem',
          fontWeight: 300,
          lineHeight: 1.75,
          color: 'rgba(245,242,235,0.52)',
          marginBottom: '2.5rem',
        }}>
          From tribal knowledge and manual standups to AI agents, live dashboards,
          and ₹1.5CR in annual savings. What happens when ops meets obsession.
        </p>

        {/* cta */}
        <a href="#story" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--accent)', color: 'var(--black)',
          fontWeight: 700, fontSize: '1rem',
          padding: '0.9rem 2.25rem', borderRadius: 'var(--radius-sm)',
          textDecoration: 'none', letterSpacing: '0.01em',
          transition: 'transform 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          See the build ↓
        </a>
      </div>

      {/* scroll hint */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '2rem',
        right: 'clamp(1.5rem, 6vw, 3.5rem)',
        writingMode: 'vertical-rl',
        fontFamily: 'var(--ff-mono)', fontSize: '0.625rem',
        color: 'rgba(245,242,235,0.22)',
        letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>Scroll to explore</div>

    </header>
  )
}
