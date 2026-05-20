export default function Bets() {
  const bets = [
    {
      order: '01',
      decision: 'Standardize before automating',
      why: 'Everyone wanted agents immediately. I said no — agents built on messy inputs produce messy outputs. Spent the first 3 months doing nothing but standardizing how work enters the system.',
      result: '75% of input standardized. ClickUp architecture rebuilt from zero for 2 departments.',
      when: 'Oct – Dec 2025',
    },
    {
      order: '02',
      decision: 'Build infra that agents can actually read',
      why: 'ClickUp-to-Airtable pipeline, alias IDs, asset folders, client channel revamp. Not exciting work. Essential work. Without structured data, no agent can run reliably at scale.',
      result: 'Real-time designer tracking, cost dashboards, auto-intake. Foundation for everything after.',
      when: 'Dec 2025 – Feb 2026',
    },
    {
      order: '03',
      decision: 'Replace roles with agents, not people with people',
      why: 'The Lead role was a bottleneck — one human routing 500+ tasks/month. The Allocator agent does it in 15 min vs 1.5 hrs, with brand history and capacity logic built in.',
      result: '₹1.5L/month saved. Delay cut from 1.5 hrs to 15 min. Lead role eliminated entirely.',
      when: 'Mar 2026',
    },
    {
      order: '04',
      decision: 'Turn tribal knowledge into structured memory',
      why: "When the department exited, everything lived in people's heads. Built a pipeline: KT docs → Claude project → brand digest HTML. 10–15 brands a day, no knowledge lost.",
      result: 'Per-client Claude projects as persistent memory. Anyone can onboard to any brand instantly.',
      when: 'Apr 2026',
    },
  ]

  return (
    <section id="bets" style={{ background: 'var(--cream)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--muted)', marginBottom: '0.875rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            The decisions
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '-0.025em', color: 'var(--black)',
            maxWidth: 520, overflowWrap: 'break-word',
          }}>The bets made,<br />in the order they were made</h2>
        </div>

        <div style={{
          display: 'flex', flexDirection: 'column', gap: '1px',
          background: 'var(--border)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {bets.map((b, i) => (
            <div key={i} style={{
              background: 'var(--off-white)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: 'clamp(1rem, 2.5vw, 2rem)',
              alignItems: 'start',
            }}>
              {/* ghost number */}
              <div style={{
                fontFamily: 'var(--ff-display)',
                fontSize: '2rem',
                fontWeight: 800, letterSpacing: '-0.04em',
                color: 'rgba(13,13,13,0.08)', lineHeight: 1,
                paddingTop: '0.25rem',
                userSelect: 'none',
              }}>{b.order}</div>

              <div>
                {/* decision title + date */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', gap: '1rem',
                  flexWrap: 'wrap', marginBottom: '0.75rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--ff-display)',
                    fontSize: 'clamp(1rem, 1.75vw, 1.25rem)',
                    fontWeight: 800, letterSpacing: '-0.02em',
                    color: 'var(--black)', lineHeight: 1.2,
                    overflowWrap: 'break-word', minWidth: 0,
                  }}>{b.decision}</div>
                  <div style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5625rem',
                    color: 'var(--muted)', letterSpacing: '0.08em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                    paddingTop: '0.2rem', flexShrink: 0,
                  }}>{b.when}</div>
                </div>

                {/* why */}
                <p style={{
                  fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75,
                  color: 'var(--text-body)', marginBottom: '1.25rem',
                  maxWidth: 660,
                }}>{b.why}</p>

                {/* result chip */}
                <div style={{
                  display: 'inline-flex', alignItems: 'flex-start', gap: '0.625rem',
                  background: 'var(--black)',
                  padding: '0.625rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  maxWidth: '100%',
                }}>
                  <span style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '0.5rem',
                    color: 'var(--accent)', letterSpacing: '0.1em',
                    textTransform: 'uppercase', fontWeight: 700,
                    paddingTop: '0.15rem', flexShrink: 0,
                  }}>Result</span>
                  <span style={{
                    fontSize: '0.875rem', fontWeight: 400,
                    color: 'rgba(245,242,235,0.75)', lineHeight: 1.55,
                  }}>{b.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
