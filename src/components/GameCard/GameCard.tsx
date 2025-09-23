import { Game } from "@/components/GameCard/api/get-games";
import Image from "next/image";
import React from 'react'

import s from './game-card.module.css'

interface GameCardProps {
  game: Game
}

export const GameCard = async ({ game }: GameCardProps) => {

  return (
    <li key={game.id} className={s.gameCard}>
      <Image
        src={game.media.thumbnail.thumbnail.src}
        alt={game.meta.name}
        className={s.gameCardImage}
        width={250}
        height={300}
      />
      <div className={s.gameCardBottom}>
        <span className={s.eventMessage}>{game.meta.name}</span>
      </div>
    </li>
  )
}