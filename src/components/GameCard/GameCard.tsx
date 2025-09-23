import { Event } from "@/components/GameCard/components/Event/Event.client";
import Image from "next/image";
import React from 'react'

import s from './game-card.module.css'

interface GameCardProps {
  src: string
  alt: string
  name: string
  id: string
}

export const GameCard = async (
  {
    src, alt, name, id
  }: GameCardProps) => {
  return (
    <li className={s.gameCard}>
      <Image
        src={src}
        alt={alt}
        className={s.gameCardImage}
        width={250}
        height={300}
      />
      <div className={s.gameCardBottom}>
        <span className={s.eventMessage}>{name}</span>
      </div>
      <Event
        gameId={id}
      />
    </li>
  )
}