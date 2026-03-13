import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>🔔 Pingcoin</span>,
  project: {
    link: 'https://github.com/jessems/pingcoin-android',
  },
  chat: {
    link: 'https://discord.gg/pingcoin',
  },
  docsRepositoryBase: 'https://github.com/jessems/pingcoin-docs/tree/main',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © Pingcoin — Open source counterfeit coin detection
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Pingcoin - Detect counterfeit gold and silver coins using acoustic analysis" />
      <meta name="og:title" content="Pingcoin Documentation" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔔</text></svg>" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Pingcoin Docs'
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
}

export default config
