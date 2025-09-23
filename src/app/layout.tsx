import { CategoryList } from "@/components/CategoryList/CategoryList";
import { GameEvents } from "@/components/GameEvents/GameEvents";
import { GridOverlay } from "@/components/GridOverlay/GridOverlay";
import { Header } from "@/components/Header/Header";

import '../styles/globals.css';
import { Sidebar } from "@/components/Sidebar/Sidebar";

import { Inter, } from 'next/font/google';
import React, { PropsWithChildren, Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html className={inter.className}>
    <body>
    <div className={'wrapper'}>
      <Header/>
      <div className={'main-layout'}>
        <Sidebar>
          <Suspense
            fallback={<p>Loading categories...</p>}
          >
            <CategoryList/>
          </Suspense>
        </Sidebar>
        <main className={'main'}>
          {children}
          <GridOverlay/>
        </main>
      </div>
    </div>
    <GameEvents/>
    </body>
    </html>
  );
};

export default Layout;