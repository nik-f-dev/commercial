import { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '../components/Header';
import Footer from '../components/Footer';

import './globals.css';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Duende',
  description:
    '3D architectural visualization and animation studio. We provide high-end realistic 3d rendering services for architects, developers, branding agencies and companies.',
  applicationName: 'Duende',
  keywords: [
    'architectural',
    'visualization',
    'architectural visualization',
    'animation studio',
    '3d rendering',
    'architects',
    'branding agencies',
    'developers',
    'Crimea',
  ],
  creator: 'nik-f-dev',
};

const arodora = localFont({
  src: '../../public/fonts/Arodora/ArodoraProLight.otf',
  weight: '400',
  style: 'normal',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={arodora.className}>
      <body>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.childrenWrapper}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
