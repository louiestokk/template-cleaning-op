import localFont from "next/font/local";
import "./globals.css";
import {Providers} from '../redux/provider'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'Tant Rut Alltjänst – Flytt, Städning och Dödsbotömning med RUT-avdrag',
  description:'Tant Rut Alltjänst erbjuder flytt, städning och tömning av hushåll och dödsbon. Utnyttja ditt RUT-avdrag och få professionell hjälp snabbt och smidigt!',
  keywords: [
      'flyttstäd Göteborg', 'flyttstädning Göteborg', 'flyttstäd hisingen', 'billig flyttstädning', 'flyttfirma', 
      'städa inför flytt', 'miljövänlig flyttstädning', 'flyttstäd pris', 'kontorsstäd', 
      'privatstäd', 'industristäd', 'byggstäd', 'flyttstäd checklista', 'garanterad flyttstädning',
      'billig flyttstäd Göteborg','bra flyttstäd Göteborg','Göteborg','flyttfirma Göteborg','flytthjälp Göteborg',
      'städfirma göteborg','städfirma','flyttfirma','flyttfiirma göteborg','flyttstäd Göteborg'
    ],
  metadataBase: new URL('https://tantrut.netlify.app'),
  alternates: {
    canonical: 'https://tantrut.netlify.app/',
    languages: {
      'sv': '/sv',
    },
  },
  openGraph: {
    title: 'Tant Rut Alltjänst – Flytt, Städning och Dödsbotömning med RUT-avdrag',
    images: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:'Tant Rut Alltjänst erbjuder flytt, städning och tömning av hushåll och dödsbon. Utnyttja ditt RUT-avdrag och få professionell hjälp snabbt och smidigt!',
    url: 'https://tantrut.netlify.app/',
    site_name: 'Tant Rut Alltjänst',
    images: [
      {
        url: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1260,
        height: 750,
        alt: 'Tant Rut Alltjänst',
      }
    ],
    type: 'website',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tanrut', 
    title: 'Tant Rut Alltjänst – Flytt, Städning och Dödsbotömning med RUT-avdrag',
    description:'Tant Rut Alltjänst erbjuder flytt, städning och tömning av hushåll och dödsbon. Utnyttja ditt RUT-avdrag och få professionell hjälp snabbt och smidigt!',
    image: 'https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
