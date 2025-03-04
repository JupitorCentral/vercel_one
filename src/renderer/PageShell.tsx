import React from 'react';

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <header>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 My SSR App</p>
      </footer>
    </div>
  );
}
