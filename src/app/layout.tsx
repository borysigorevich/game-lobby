import { CategoryList } from "@/components/CategoryList/CategoryList";
import { GameEvents } from "@/components/GameEvents/GameEvents";
import React, { PropsWithChildren, Suspense } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html>
    <body>
    <div style={{ padding: "2rem" }}>
      <h1>Casino Games Lobby</h1>
      <Suspense
        fallback={<p>Loading categories...</p>}
      >
        <CategoryList style={{ marginBottom: "2rem" }}/>
      </Suspense>
      {children}
      <GameEvents/>
    </div>
    </body>
    </html>
  );
};

export default Layout;