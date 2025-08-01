import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Provider from "./providers"


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto",
  weight: [ '100', '300', '400', '500', '700', '900' ],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dra. Fernanda",
  description: "Ginecologista e Obstetra",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-sans`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
