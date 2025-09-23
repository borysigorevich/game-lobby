import { Game } from "@/components/GameCard/api/get-games";
import React from 'react'

import styles from '../../styles/EventFeed.module.css'

interface GameCardProps {
  game: Game
}

export const GameCard = async ({ game }: GameCardProps) => {

  return (
    <li key={game.id} className={styles.eventItem}>
      <div className={styles.gameCard}>
        <img
          src={game.media.thumbnail.thumbnail.src}
          alt={game.meta.name}
          className={styles.gameImage}
        />
        <span className={styles.eventMessage}>{game.meta.name}</span>
      </div>
    </li>
  )
}