import { getGames } from "@/components/GameCard/api/get-games";
import React from 'react'

import styles from '../../styles/EventFeed.module.css'

export interface Game {
  id: string
  meta: {
    name: string
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

export const GameCard = async ({category}: GameCardProps) => {
  const { data: games } = await getGames()

  console.log({games: games?.items})

  return (
    <div className={styles.eventFeed}>
      <h3>Game Cards</h3>
      {games?.count === 0 ? (
        <p>No games available</p>
      ) : (
        <ul className={styles.eventList}>
          {games?.items.filter(game => {
            if(!category) return

            return game.meta.name.toLowerCase().includes(category.toLowerCase())
          }).map((game) => {

            console.log({gameMeta: game.meta})
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