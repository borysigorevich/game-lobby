'use client'
import { useGameEvents } from "@/hooks/useGameEvents";

export interface EventGame {
  id: string;
  gameText: string
}

interface GameEventsProps {
  games?: EventGame[]
}

export const GameEvents = ({ games }: GameEventsProps) => {
  useGameEvents({ games })

  return null
};