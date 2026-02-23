import type { Metadata } from 'next';
import '../styles/fonts.css';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'Alex Johnson - Full Stack Developer',
  description: 'Premium portfolio website showcasing full-stack development projects, skills, and experience. CSE 3rd year student specializing in modern web technologies.',
  keywords: 'Full Stack Developer, Web Developer, React, Next.js, Portfolio, CSE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
