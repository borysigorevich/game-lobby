import { getGames } from "@/components/GameCard/api/get-games";
import { GameHeader } from "@/components/GameHeader/GameHeader";
import { GamesList } from "@/components/GamesList/GamesList";
import React from 'react';

interface PageProps {
  searchParams: Promise<{
    search: string;
  }>
}

const Page = async ({ searchParams }: PageProps) => {

  const { search } = await searchParams

  const { data: games } = await getGames({ search })

  return (
    <>
      <GameHeader
        title="Casino games lobby"
        totalGames={games?.items.length || 0}
      />
      <GamesList
        games={games}
      />
    </>
  )
};

export default Page;