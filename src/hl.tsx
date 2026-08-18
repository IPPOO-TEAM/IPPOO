import React from 'react'

// Cycling palette - no red, no orange, no brown
const VIVID = [
  '#FF2D7A', '#16A34A', '#0891B2', '#D4AF37',
  '#D4AF37', '#84CC16', '#059669', '#2563EB',
]

// Function/stop words - never highlighted
const SKIP = new Set([
  // French articles & prepositions
  'de','du','des','le','la','les','un','une','en','à','au','aux',
  'et','ou','ni','mais','que','qui','par','sur','sous','dans','avec',
  'sans','pour','chez','vers','dès','lors','via','ne','se','ce','cet',
  'cette','ces','mon','ton','son','ma','ta','sa','mes','tes','ses',
  'notre','votre','leur','leurs','pas','très','bien','tout','tous',
  'toute','toutes','même','aussi','encore','déjà','dont','car','donc',
  // Common French verbs forms
  'est','sont','était','étaient','sera','seront','avait','avaient',
  'aura','auront','peut','peuvent','doit','doivent','fait','font',
  'a','ont','as','ai','avons','avez','été','avoir','faire','être',
  // English stop words
  'the','a','an','of','by','for','to','in','on','at','is','are',
  'was','were','has','have','not','and','or','with','its','their',
])

function skip(w: string): boolean {
  const clean = w.toLowerCase().replace(/^[l'd][''’]/, '').replace(/['''’].*$/, '').trim()
  return SKIP.has(clean) || clean.length < 3
}

// ─── Domain keywords always highlighted wherever they appear ─────────────────
const KW_RE = new RegExp(
  '\\b(' + [
    'groupements?','accompagnements?','accompagne(?:ment)?','programmes?',
    'formations?','écosystèmes?','ecosystèmes?','plateformes?',
    'réseaux?','communautés?','acteurs?','entrepreneurs?','entrepreneures?',
    'artisans?','coopératives?','solidaires?','mutualisation',
    'informels?','informelles?','novateurs?','parrainage','parrainages?',
    'adhésions?','membres?','couvertures?','groupement','espaces?','soutien',
  ].join('|') + ')\\b',
  'gi'
)

const KW_COLORS = ['#16A34A','#0891B2','#D4AF37','#DB2777','#0EA5E9','#2563EB','#059669','#FF2D7A']
let kwRound = 0

/** Highlight domain keywords in a plain-text segment */
function hlKw(text: string, keyBase: string): React.ReactNode[] {
  const parts = text.split(KW_RE)
  return parts.map((p, i) => {
    if (i % 2 === 1) {
      const c = KW_COLORS[kwRound++ % KW_COLORS.length]
      return <strong key={keyBase + i} style={{ color: c, fontWeight: 700 }}>{p}</strong>
    }
    return p
  })
}

/**
 * Single-pass regex matching compound IPPOO names as ONE unit:
 *   • Group 1+2 : any word + separator BEFORE IPPOO   → "DIAZZ-IPPOO", "l'écosystème IPPOO"
 *   • Group 3+4 : IPPOO + separator + any word AFTER  → "IPPOO-MARKET", "IPPOO accompagne"
 *   • Fallback  : standalone IPPOO
 *
 * Compound is one color. Domain keywords in surrounding text get their own color.
 */
const COMPOUND_RE =
  /([^\s\-,;.!?’"’’’()\[\]]+)([-\s])IPPOO|IPPOO([-\s])([^\s,;.!?’"’’’()\[\]]+)(?=[\s,;.:!?’"()\[\]]|$)|IPPOO/g

export function IpHL({ text, color }: { text: string; color?: string }) {
  let ci = 0
  const nc = (): string => color ?? VIVID[ci++ % VIVID.length]

  const result: React.ReactNode[] = []
  let lastIndex = 0
  kwRound = 0          // reset keyword color cycle per call
  COMPOUND_RE.lastIndex = 0

  let m: RegExpExecArray | null
  while ((m = COMPOUND_RE.exec(text)) !== null) {
    // Plain text before this match → keyword-highlight it
    if (m.index > lastIndex) {
      result.push(...hlKw(text.slice(lastIndex, m.index), 'k' + lastIndex))
    }

    const c = nc()

    if (m[1] !== undefined) {
      // WORD + sep + IPPOO
      if (!skip(m[1])) {
        result.push(
          <strong key={m.index} style={{ color: c, fontWeight: 900 }}>
            {m[1]}{m[2]}IPPOO
          </strong>
        )
      } else {
        result.push(...hlKw(m[1], 'kb' + m.index))
        result.push(m[2])
        result.push(<strong key={'ip' + m.index} style={{ color: color ?? '#FF2D7A', fontWeight: 900 }}>IPPOO</strong>)
      }
    } else if (m[4] !== undefined) {
      // IPPOO + sep + WORD
      if (!skip(m[4])) {
        result.push(
          <strong key={m.index} style={{ color: c, fontWeight: 900 }}>
            IPPOO{m[3]}{m[4]}
          </strong>
        )
      } else {
        result.push(<strong key={'ip' + m.index} style={{ color: color ?? '#FF2D7A', fontWeight: 900 }}>IPPOO</strong>)
        result.push(m[3])
        result.push(...hlKw(m[4], 'ka' + m.index))
      }
    } else {
      // Standalone IPPOO
      result.push(<strong key={m.index} style={{ color: color ?? '#FF2D7A', fontWeight: 900 }}>IPPOO</strong>)
    }

    lastIndex = m.index + m[0].length
  }

  // Remaining text after last match
  if (lastIndex < text.length) {
    result.push(...hlKw(text.slice(lastIndex), 'kt' + lastIndex))
  }

  return <>{result}</>
}

/** Inline IPPOO badge for direct JSX use */
export function Ip() {
  return <strong style={{ color: '#FF2D7A', fontWeight: 900 }}>IPPOO</strong>
}
