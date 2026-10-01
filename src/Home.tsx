import { Layout } from './Layout'
import { site } from './site'

const things: [string, string][] = [
  ['Triages your inbox', 'Rates new email by importance and tells you which ones need a reply.'],
  ['Drafts replies in your voice', 'Saves a draft in Gmail with your signature. It never sends without asking you first.'],
  ['Knows who is writing', 'With your permission, looks up the sender in your CRM so replies have context.'],
  ['Runs on a schedule', 'Watches for what you care about and sends you a short digest.'],
]

export function Home() {
  return (
    <Layout>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight">{site.name}</h1>
      <p className="mt-4 text-lg" style={{ color: 'var(--color-muted)' }}>
        A personal AI assistant for email, calendar and scheduling. It is in private testing.
      </p>
      <ul className="mt-10 grid gap-4">
        {things.map(([title, text]) => (
          <li key={title} className="rounded-xl p-5" style={{ background: 'var(--color-raised)' }}>
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-1" style={{ color: 'var(--color-muted)' }}>
              {text}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-10">
        It acts for you, not on its own. Anything that sends a message or changes a record waits for your approval.{' '}
        <a className="underline" href="/privacy/">
          How your data is handled
        </a>
        .
      </p>
    </Layout>
  )
}
