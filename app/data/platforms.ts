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
    label: 'Bondora',
    name: 'Bondora Go & Grow',
    to: '/platforms/bondora',
    rank: 2,
    tagline: 'Best for simple, hands-off P2P exposure.',
    summary:
      'A passive Go & Grow product for investors who want simple deposits, daily returns, and straightforward withdrawals.',
    facts: [
      { label: 'Best for', value: 'Passive investors who want simplicity.' },
      { label: 'Watch', value: 'Lower return ceiling and platform conditions.' }
    ],
    reviewCta: 'Read Bondora review'
  }
]

export const platformNavLinks: PlatformNavLink[] = platforms.map(({ label, to }) => ({ label, to }))

export const platformMenuLinks: PlatformNavLink[] = [
  { label: 'All platforms', to: '/platforms', mobileOnly: true },
  ...platformNavLinks
]
