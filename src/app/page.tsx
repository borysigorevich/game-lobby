import { GameCard } from "@/components/GameCard/GameCard";
import React, { Suspense } from 'react';

interface PageProps {
  searchParams: Promise<{
    search: string;
  }>
}

const Page = async ({ searchParams }: PageProps) => {

  const { search } = await searchParams

  return (
    <div>
      <h2>Available Games</h2>
      <Suspense
        fallback={<p>Loading games...</p>}
      >
        <GameCard search={search}/>
      </Suspense>
    </div>
  )
};

export default Page;