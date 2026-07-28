export type PlatformFact = {
  label: string
  value: string
}

export type PlatformNavLink = {
  label: string
  to: string
  mobileOnly?: boolean
}

export type PlatformListing = {
  label: string
  name: string
  to: string
  rank: number
  tagline: string
  summary: string
  facts: PlatformFact[]
  reviewCta: string
}

export const platforms: PlatformListing[] = [
  {
    label: 'Mintos',
    name: 'Mintos',
    to: '/platforms/mintos',
    rank: 1,
    tagline: 'Best overall for investors who want choice and control.',
    summary:
      'A broader investing platform with loans, bonds, real estate, ETFs, Smart Cash, and crypto ETPs from one account.',
    facts: [
      { label: 'Best for', value: 'More product choice and control.' },
      { label: 'Watch', value: 'More complexity and product-specific risk.' }
    ],
    reviewCta: 'Read Mintos review'
  },
  {
    label: 'IUVO',
    name: 'IUVO Group',
    to: '/platforms/iuvo',
    rank: 2,
    tagline: 'Best returns in our hands-on experience.',
    summary:
      'A flexible loan-receivables marketplace with manual investing, Auto Assign, a secondary market, and the strongest returns we have seen across the platforms covered here.',
    facts: [
      { label: 'Best for', value: 'Return-focused investors who want portfolio control.' },
      { label: 'Watch', value: 'Occasional cart loading friction, slower bank transfers, and originator risk.' }
    ],
    reviewCta: 'Read IUVO review'
  },
  {
    label: 'Bondora',
    name: 'Bondora Go & Grow',
    to: '/platforms/bondora',
    rank: 3,
    tagline: 'Best for simple, hands-off P2P exposure.',
    summary:
      'A passive Go & Grow product for investors who want simple deposits, daily returns, and straightforward withdrawals.',
    facts: [
      { label: 'Best for', value: 'Passive investors who want simplicity.' },
      { label: 'Watch', value: 'Lower return ceiling and platform conditions.' }
    ],
    reviewCta: 'Read Bondora review'
  },
  {
    label: 'Robo.cash',
    name: 'Robo.cash',
    to: '/platforms/robocash',
    rank: 4,
    tagline: 'Best for a fully automated, low-maintenance P2P approach.',
    summary:
      'A hands-off loan-investing platform with automated portfolios, an established repayment track record, and slower bank-transfer cash movement.',
    facts: [
      { label: 'Best for', value: 'Investors who want to set a portfolio and leave it running.' },
      { label: 'Watch', value: 'No manual loan picking, 2–3 day bank transfers, and group concentration.' }
    ],
    reviewCta: 'Read Robo.cash review'
  }
]

export const platformNavLinks: PlatformNavLink[] = platforms.map(({ label, to }) => ({ label, to }))

export const platformMenuLinks: PlatformNavLink[] = [
  { label: 'All platforms', to: '/platforms', mobileOnly: true },
  ...platformNavLinks
]
