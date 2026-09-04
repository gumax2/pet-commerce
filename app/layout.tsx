import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Commerce — Uma rotina mais interativa para seu pet',
  description: 'MVP de e-commerce pet.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
