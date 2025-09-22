import { CategoryList } from "@/components/CategoryList/CategoryList";
import { GameCard } from "@/components/GameCard/GameCard";
import { GameEvents } from "@/components/GameEvents/GameEvents";
import React, { Suspense } from 'react';

const Page = () => {

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Casino Games Lobby</h1>
      <Suspense
        fallback={<p>Loading categories...</p>}
      >
        <CategoryList style={{ marginBottom: "2rem" }}/>
      </Suspense>
      <h2>Available Games</h2>
      <Suspense
        fallback={<p>Loading games...</p>}
      >
        <GameCard/>
      </Suspense>

      <GameEvents/>

    </div>
  )
};

export default Page;