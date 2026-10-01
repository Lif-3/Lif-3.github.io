import type { ReactNode } from 'react'
import { site } from './site'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 sm:px-6">
      <header className="flex items-center justify-between py-6">
        <a href="/" className="font-semibold tracking-tight">
          {site.name}
        </a>
        <a href="/privacy/" className="text-sm" style={{ color: 'var(--color-muted)' }}>
          Privacy
        </a>
      </header>
      <main className="flex-1 pb-16">{children}</main>
      <footer className="py-8 text-sm" style={{ color: 'var(--color-muted)' }}>
        A personal project. Contact:{' '}
        <a className="underline" href={`mailto:${site.contactEmail}`}>
          {site.contactEmail}
        </a>
      </footer>
    </div>
  )
}
