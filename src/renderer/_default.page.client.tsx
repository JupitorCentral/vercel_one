import React from 'react';
import ReactDOM from 'react-dom/client';
import PageShell from './PageShell.js';

export { render };

async function render(pageContext: {Page: React.ComponentType<any>; pageProps: any}) {
  const { Page, pageProps } = pageContext;
  
  ReactDOM.hydrateRoot(
    document.getElementById('app')!,
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  );
}
