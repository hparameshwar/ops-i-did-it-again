export default function Closing() {
  return (
    <section id="contact" style={{
      background: 'var(--accent)',
      paddingBlock: 'clamp(5rem, 10vw, 8rem)',
      textAlign: 'center',
    }}>
      <div className="container">
        <h2 style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.0,
          letterSpacing: '-0.035em', color: 'var(--black)',
          marginBottom: '1.5rem',
        }}>
          The build<br />isn't done.
        </h2>
        <p style={{
          maxWidth: 440, marginInline: 'auto',
          marginBottom: '2.5rem',
          fontSize: '1.0625rem', fontWeight: 300,
          lineHeight: 1.75, color: 'rgba(13,13,13,0.55)',
        }}>
          Every system here was built to be replaced by a better one. That's the point.
          If you want to talk ops, AI, or what happens when you refuse to accept manual
          as a constraint —
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="mailto:hparameshwarb@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--black)', color: 'var(--accent)',
              fontWeight: 700, fontSize: '1rem',
              padding: '0.9rem 2.25rem', borderRadius: 'var(--radius-sm)',
              textDecoration: 'none', letterSpacing: '0.01em',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            hparameshwarb@gmail.com →
          </a>
          <a
            href="tel:+917338810669"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'transparent', color: 'var(--black)',
              fontWeight: 700, fontSize: '1rem',
              padding: '0.9rem 2.25rem', borderRadius: 'var(--radius-sm)',
              textDecoration: 'none', letterSpacing: '0.01em',
              border: '2px solid rgba(13,13,13,0.3)',
              transition: 'transform 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(13,13,13,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(13,13,13,0.3)'; }}
          >
            +91 73388 10669
          </a>
        </div>
      </div>
    </section>
  )
}
