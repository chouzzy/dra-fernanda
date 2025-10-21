import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Provider from "./providers"
import GoogleTagManager from "./components/ui/GoogleTagManager";
import { Suspense } from "react";


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
  weight: ['100', '300', '400', '500', '700', '900'],
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
      <head>
        {/* <meta name="google-site-verification" content="M3UzLsJpL1zYFyj5Wt6wbWHLzefipBgkEYLZ-yHSGoQ" /> */}
      </head>
      <body className={`${roboto.variable} font-sans`}>
        <Provider>
          <Suspense fallback={null}>
            <GoogleTagManager />
          </Suspense>
          {children}
        </Provider>
      </body>
    </html>
  );
}
