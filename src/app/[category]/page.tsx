import { getGamesByCategory } from "@/app/[category]/_api/get-games-by-category";
import { getConfig } from "@/components/CategoryList/api/get-config";
import { GameCard } from "@/components/GameCard/GameCard";
import { GameHeader } from "@/components/GameHeader/GameHeader";
import { GamesList } from "@/components/GamesList/GamesList";
import { EventProvider } from "@/providers/EventProvider";
import React from 'react';

interface PageProps {
  params: Promise<{
    category: string;
  }>,
  searchParams: Promise<{
    search: string;
  }>
}

export const generateStaticParams = async () => {
  const { data: categories } = await getConfig()

  return categories?.menu.lobby.items.map((category) => ({
    category: encodeURIComponent(category.name.en),
  })) || [];
}

const Page = async ({ params, searchParams }: PageProps) => {

  const { category } = await params;
  const { search } = await searchParams;

  const decodedCategory = decodeURIComponent(category);

  const { data: config } = await getConfig()

  const link = config?.menu.lobby.items.find(cat => cat.name.en.toLowerCase() === decodedCategory?.toLowerCase())

  const categoryUrl = link ? link.links.getPage.en : undefined

  if (!categoryUrl) return <p>Category not found</p>

  const { data: games } = await getGamesByCategory({ url: categoryUrl })

  if (!games) return <p>No games available</p>

  const gameList = games?.components?.[0].games || []

  const filteredGames = search?.trim() ? gameList.filter(game => game.gameText.toLowerCase().includes(search.toLowerCase())) : gameList

  return <EventProvider games={filteredGames.map((game) => ({
    id: game.id,
    gameText: game.gameText
  }))}>
    <GameHeader
      title={games.meta.title || decodedCategory}
      totalGames={filteredGames.length || 0}
    />
    {gameList?.length === 0 ? <p>No games available</p> :
      <GamesList
        content={filteredGames.map((game) => {
          return <GameCard
            key={game.id}
            id={game.id}
            src={game.image.original.src}
            alt={game.image.alt}
            name={game.gameText}
          />
        })}
      />}
  </EventProvider>
};

export default Page;