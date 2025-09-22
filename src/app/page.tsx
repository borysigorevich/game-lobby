import { GameCard } from "@/components/GameCard/GameCard";
import React, { Suspense } from 'react';

const Page = async () => {

  return (
    <>
      <h2>Available Games</h2>
      <Suspense
        fallback={<p>Loading games...</p>}
      >
        <GameCard/>
      </Suspense>
    </>
  )
};

export default Page;