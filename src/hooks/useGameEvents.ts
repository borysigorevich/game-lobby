import { EventGame } from "@/components/GameEvents/GameEvents";
import { useEffect, useState } from "react"
import { GameEvent, mockSocket } from "../services/socket"


export function useGameEvents({games}:{ games?: EventGame[] }) {
  const [events, setEvents] = useState<GameEvent[]>([])

  useEffect(() => {
    if (!games || games.length === 0) {
      return
    }

    const handleMessage = (event: GameEvent) => {
      setEvents((prev) => [event, ...prev])
    }

    mockSocket.connect(games)
    mockSocket.onMessage(handleMessage)

    return () => {
      mockSocket.removeListener(handleMessage)

      if (mockSocket['listeners'].length === 0) {
        mockSocket.disconnect()
      }
    }
  }, [games])

  return events
}
