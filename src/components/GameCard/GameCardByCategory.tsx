import { getConfig } from "@/components/CategoryList/api/get-config";
import { getGamesByCategory } from "@/components/GameCard/api/get-games-by-category";
import { Search } from "@/components/GameCard/Search.client";
import styles from "@/styles/EventFeed.module.css";
import React from 'react';

interface GameCardByCategoryProps {
  category?: string
}

export const GameCardByCategory = async ({ category }: GameCardByCategoryProps) => {

  const { data: config } = await getConfig()

  const link = config?.menu.lobby.items.find(cat => cat.name.en.toLowerCase() === category?.toLowerCase())

  const categoryUrl = link ? link.links.getPage.en : undefined

  const { data: games } = await getGamesByCategory({ url: categoryUrl })

  if(!games) return null

  const gameList = games?.components?.[0].games || []

  return (
    <>
      <h2>{games?.meta.title}</h2>
      <div className={styles.eventFeed}>
        <div style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
        }}>
          <h3>Game Cards</h3>
        </div>
        {gameList?.length === 0 ? (
          <p>No games available</p>
        ) : (
          <ul className={styles.eventList}>
            {gameList.map((game) => {

              return <li key={game.id} className={styles.eventItem}>
                <div className={styles.gameCard}>
                  <img
                    src={game.image.thumbnail.src}
                    alt={game.image.alt}
                    className={styles.gameImage}
                  />
                  <span className={styles.eventMessage}>{game.gameText}</span>
                </div>
              </li>
            })}
          </ul>
        )}
      </div>
    </>
  );
};