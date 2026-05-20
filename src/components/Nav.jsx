import { useState } from 'react'

const links = [
  { href: '#story',    label: 'Story'    },
  { href: '#agents',   label: 'Agents'   },
  { href: '#impact',   label: 'Impact'   },
  { href: '#workflow', label: 'Workflow' },
  { href: '#next',     label: 'Next'     },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', inset: '0 0 auto 0', zIndex: 200,
        height: 'var(--nav-h)',
        background: 'rgba(245,242,235,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }} aria-label="Site navigation">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: '100%',
          maxWidth: 1160, marginInline: 'auto',
          paddingInline: 'clamp(1.5rem, 6vw, 3.5rem)',
        }}>
          <a href="#" style={{
            fontFamily: 'var(--ff-display)', fontWeight: 800, fontSize: '1.0625rem',
            letterSpacing: '-0.01em', textDecoration: 'none', color: 'var(--black)',
          }}>Harish ✦</a>

          {/* desktop links */}
          <ul className="nav-links" role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.6875rem',
                  fontWeight: 700, color: 'var(--muted)', textDecoration: 'none',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  transition: 'color 0.18s',
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--black)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >{l.label}</a>
              </li>
            ))}
          </ul>

          {/* hamburger */}
          <button
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span style={{ transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* mobile overlay */}
      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
