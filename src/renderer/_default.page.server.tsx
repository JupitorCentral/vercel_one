import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import PageShell from './PageShell.js';

export { render };
export const passToClient = ['pageProps', 'documentProps'];

async function render(pageContext: {Page: React.ComponentType<any>; pageProps: any; documentProps?: {title?: string; description?: string;}}) {
  const { Page, pageProps } = pageContext;
  const appHtml = renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${pageContext.documentProps?.title || 'My App'}</title>
        <meta name="description" content="${pageContext.documentProps?.description || 'My App Description'}" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
