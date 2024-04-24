import type { Metadata } from 'next';
import './globals.css';
import { getDataHomePage } from './service/homepage';

export const metadata: Metadata = {
  title: 'MicroFin',
  description: 'Insurance, Investment and All',
  openGraph: {
    title: 'MicroFin',
    description: 'Insurance, Investment and All',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const result = await getDataHomePage();
  let data = result.data.attributes;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: data.name,
    legalName: data.legalNameSeo,
    logo: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/`,
    url: process.env.NEXT_PUBLIC_DOMAIN_URL,
    founders: data.teams.map((team: any) => {
      return {
        '@type': 'Person',
        name: team.name,
      };
    }),

    address: {
      '@type': 'PostalAddress',
      streetAddress: data.streetAddressSeo || '',
      addressLocality: data.addressLocalitySeo || '',
      addressRegion: data.addressRegionSeo || '',
      postalCode: data.postalCodeSeo || '',
      addressCountry: data.addressCountrySeo || '',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: data.contactTypeSeo || 'customer support',
      telephone: data.telephoneSeo || '[+561-526-8457]',
      email: data.email || 'info@elite-strategies.com',
    },
  };
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logo_icon.png"
          type="image/png"
          sizes="16x16"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <meta charSet="utf-8" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_DOMAIN_URL}></link>
        <meta
          property="og:logo"
          content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/images/logo_full.svg`}
        />
        <meta property="og:logo:width" content="156" />
        <meta property="og:logo:height" content="52" />
        <meta property="og:logo:alt" content="Logo MicroFin" />
        <meta property="og:logo:type" content="image/svg"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
