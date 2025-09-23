import { CategoryList } from "@/components/CategoryList/CategoryList";
import { GameEvents } from "@/components/GameEvents/GameEvents";
import { Header } from "@/components/Header/Header";

import '../styles/globals.css';

import { Inter } from 'next/font/google';
import React, { PropsWithChildren, Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html className={inter.className}>
    <body>
    <Header/>
    <h1>Casino Games Lobby</h1>
    <Suspense
      fallback={<p>Loading categories...</p>}
    >
      <CategoryList style={{ marginBottom: "2rem" }}/>
    </Suspense>
    {children}
    <GameEvents/>
    </body>
    </html>
  );
};

export default Layout;