import { Layout } from './Layout'
import { site } from './site'

const sections: [string, string][] = [
  ['What it is', `${site.name} is a personal project in private testing. It is not a company and not a public service.`],
  [
    'What it reads',
    'With your permission it reads your Gmail messages and Google Calendar, and, if you connect one, your HubSpot contacts, companies, deals and notes. It reads them to rate email, to draft replies, and to give a reply context about the sender.',
  ],
  [
    'What it changes',
    'It saves reply drafts to Gmail. It never sends an email, and never creates or changes a CRM record, without your explicit approval for that action.',
  ],
  [
    'What it stores',
    'Your sign-in tokens for Google and HubSpot, stored encrypted, and the settings you choose. Email content is processed to produce ratings and drafts. It is not sold or shared for advertising.',
  ],
  [
    'Third parties',
    'Message text is sent to an AI model provider to rate emails and write drafts. Your Google and HubSpot data stays with those services except for what is needed for that.',
  ],
  [
    'Disconnecting',
    'You can disconnect Google or HubSpot at any time from the app, which deletes the stored tokens. You can also revoke access from your Google or HubSpot account settings.',
  ],
  ['Questions', `Write to ${site.contactEmail}.`],
]

export function Privacy() {
  return (
    <Layout>
      <h1 className="mt-8 text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--color-muted)' }}>
        Last updated 1 October 2026
      </p>
      {sections.map(([title, text]) => (
        <section key={title} className="mt-8">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-2" style={{ color: 'var(--color-muted)' }}>
            {text}
          </p>
        </section>
      ))}
    </Layout>
  )
}
