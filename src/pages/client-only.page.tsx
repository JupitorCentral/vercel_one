// src/pages/client-only.page.tsx
import React, { useState } from 'react';
import { PageContext } from 'vite-plugin-ssr/types';

// Component definition for the client-only page
export function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Client-Only Page</h1>
      <p>This page is rendered entirely on the client.</p>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

// Configuration for vite-plugin-ssr
export const clientRouting = true;

// Mark this page as client-only
export const onBeforeRender = (pageContext: PageContext) => {
  return {
    pageContext: {
      // This ensures the page is only rendered on the client
      skipRender: true
    }
  };
};
