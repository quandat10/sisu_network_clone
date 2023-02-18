import './globals.css'
import HeadersCpn from "@/components/headers";
import localFont from '@next/font/local'
import Image from "next/image";
import Head from "next/head";

const gordita = localFont({
  src: [
    {
      path: '../../public/fonts/Gordita-Thin.otf',
      weight: '100'
    },
    {
      path: '../../public/fonts/Gordita-Light.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Gordita-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Gordita-Medium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Gordita-Bold.otf',
      weight: '700'
    },
    {
      path: '../../public/fonts/Gordita-Black.otf',
      weight: '900'
    },
    {
      path: '../../public/fonts/Gordita-Ultra.otf',
      weight: '950'
    },
  ],
  variable: '--font-gordita'
})

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gordita.variable}`}>
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

    <head>
      <title >Sisu Network</title>
    </head>
    <body>
    <main>
      <HeadersCpn/>
      {children}
    </main>
    </body>
    </html>
  )
}
