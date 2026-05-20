export default function Timeline() {
  const months = [
    {
      period: 'Oct – Nov 2025',
      theme: 'Understand the chaos',
      items: [
        'Mapped day-to-day workflows across EM and D&D through 1-on-1s with every team member',
        'Identified escalation patterns — Mailjestic revisions, client frustration root causes',
        'Standardized ClickUp: statuses, conventions, custom fields — 40+ brands, 2 departments',
        'Ran new joiner onboarding, built internal process docs from scratch',
      ],
    },
    {
      period: 'Dec 2025 – Jan 2026',
      theme: 'Build the foundation',
      items: [
        'Restructured all client channels — (N) prefixed folders, dedicated lists, standardized statuses',
        'Sourced all brand data: websites, review boards, Google Sheet mapping per client',
        'Consolidated client review boards into single files per client, password protected externally',
        'Built ClickUp forms for standardized intake — 75% of input now agent-readable',
      ],
    },
    {
      period: 'Feb 2026',
      theme: 'Wire up the data layer',
      items: [
        'Built ClickUp-to-Airtable multi-entry pipeline — real-time designer output tracking',
        'Designed full Airtable schema from scratch: 6 tables, all fields, relationships, automations',
        'Built cost dashboard: ₹314/email exposed, 57% utilization, ₹1.54L/month idle found',
        'Led Zolanah offload to external agency — ~300 tasks/month, zero escalations post-transition',
      ],
    },
    {
      period: 'Mar 2026',
      theme: 'Deploy the agents',
      items: [
        'Shipped Quartermaster — task validation and intake, 143 handoffs, 15+ clients',
        'Shipped Forge — task creation from 4 copy sources, 105+ tasks, 2+ hrs/day saved',
        'Shipped Allocator — routing by brand history + capacity, 500+ tasks, replaced Lead role',
        'Shipped Scout — EM deadline mismatch flagging, validated and converting to N8N',
        'Built D&D restructuring proposal with 3 options and full cost model — ₹34L saved immediately',
      ],
    },
    {
      period: 'Apr 2026',
      theme: 'Centralize and scale',
      items: [
        'Managed full D&D department exit — collected KT from AMs, CSMs, designers, dept head',
        'Built brand digest pipeline: KT docs → Claude project → HTML digest, 10–15 brands/day',
        'Set up per-client Claude Projects as persistent contextual memory for all 40+ brands',
        'Built workspace navigation guide and QA checklists from 6 months of Slack complaint history',
      ],
    },
    {
      period: 'May 2026 — ongoing',
      theme: 'In progress',
      items: [
        'Claude design system — per-brand, fed with .fig files and Figma comments',
        'Figma conversion plugin — HTML → exact Figma layers, no fallbacks',
        'End-to-end client onboarding — sales handoff to strategy lock, fully automated',
        'Vision QA agent — moving to Claude Projects + plugin architecture',
      ],
      wip: true,
    },
  ]

  return (
    <section id="timeline" style={{ background: 'var(--black)', color: 'var(--off-white)' }}>
      <div className="container">

        <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'rgba(245,242,235,0.35)', marginBottom: '1rem',
          }}>
            <span style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />
            Month by month
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em',
            color: 'var(--off-white)',
          }}>The full sequence</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          {months.map((m, i) => (
            <div key={i} style={{
              background: 'var(--black)',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              display: 'grid',
              gridTemplateColumns: 'clamp(160px, 22%, 220px) 1fr',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              alignItems: 'start',
            }}>
              {/* left — period + theme */}
              <div style={{ paddingTop: '0.125rem' }}>
                <div style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.625rem',
                  color: m.wip ? '#fcd34d' : 'rgba(245,242,235,0.35)',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>{m.period}</div>
                <div style={{
                  fontFamily: 'var(--ff-display)', fontSize: '1rem',
                  fontWeight: 700, letterSpacing: '-0.01em',
                  color: m.wip ? '#fcd34d' : 'var(--accent)',
                  lineHeight: 1.2,
                }}>{m.theme}</div>
              </div>

              {/* right — items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {m.items.map((item, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  }}>
                    <span style={{
                      width: 4, height: 4, borderRadius: '50%',
                      background: m.wip ? '#fcd34d' : 'rgba(200,242,90,0.5)',
                      flexShrink: 0, marginTop: '0.55rem',
                    }} />
                    <span style={{
                      fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.65,
                      color: 'rgba(245,242,235,0.65)',
                    }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
