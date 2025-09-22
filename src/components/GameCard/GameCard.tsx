import { getGames } from "@/components/GameCard/api/get-games";
import React from 'react'

import styles from '../../styles/EventFeed.module.css'

export interface Game {
  id: string
  meta: {
    name: string
    category: string
  }
  media: {
    thumbnail: {
      thumbnail: {
        src: string
      }
    }
  }
}

interface GameCardProps {
  category?: string
}

export const GameCard = async ({ category }: GameCardProps) => {
  const { data: games } = await getGames()

  const filteredGames = games?.items.filter(game => {
      if (!category || category.toLowerCase() === 'all games') return true
      return game.meta.category.toLowerCase().includes(category.toLowerCase())
    }
  ) || []

  return (
    <div className={styles.eventFeed}>
      <h3>Game Cards</h3>
      {filteredGames.length === 0 ? (
        <p>No games available</p>
      ) : (
        <ul className={styles.eventList}>
          {filteredGames.map((game) => {

            console.log({ gameMeta: game.meta }, '***')
            return <li key={game.id} className={styles.eventItem}>
              <div className={styles.gameCard}>
                <img
                  src={game.media.thumbnail.thumbnail.src}
                  alt={game.meta.name}
                  className={styles.gameImage}
                />
                <span className={styles.eventMessage}>{game.meta.name}</span>
              </div>
            </li>
          })}
        </ul>
      )}
    </div>
  )
}