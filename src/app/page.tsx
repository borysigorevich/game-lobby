import { getGames } from "@/app/_api/get-games";
import { GameCard } from "@/components/GameCard/GameCard";
import { GameHeader } from "@/components/GameHeader/GameHeader";
import { GamesList } from "@/components/GamesList/GamesList";
import { EventProvider } from "@/providers/EventProvider";
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
    <EventProvider games={games?.items.map((game) => ({
      id: game.id,
      gameText: game.meta.name
    }))}>
      <GameHeader
        title="Casino games lobby"
        totalGames={games?.items.length || 0}
      />
      {games?.count === 0 ? <p>No games available</p> :
        <GamesList
          content={games?.items.map((game) => {

            return <GameCard
              key={game.id}
              id={game.id}
              src={game.media.thumbnail.original.src}
              alt={game.meta.name}
              name={game.meta.name}
            />
          })}
        />}
    </EventProvider>
  )
};

export default Page;