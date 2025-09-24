'use client'
import { HotIcon } from "@/components/svg/HotIcon";
import { NewIcon } from "@/components/svg/NewIcon";
import { useEventContext } from "@/providers/EventProvider";
import { useEffect, useState } from "react";

import s from './event.module.css'

interface EventProps {
  gameId: string
}

export const Event = ({ gameId }: EventProps) => {

  const { events } = useEventContext()

  const [type, setType] = useState<'hot' | 'new' | null>(null)

  useEffect(() => {

    let timeoutId: number

    const firstEvent = events.at(0)

    if (firstEvent?.gameId === gameId) {
      setType(firstEvent.type === 'POPULARITY_UPDATE' ? 'hot' : 'new')

      timeoutId = window.setTimeout(() => {
        setType(null)
      }, 2500)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [events])

  if (!type) return null

  return <div className={s.event}>
    {type === 'hot' && <HotIcon/>}
    {type === 'new' && <NewIcon/>}
  </div>
};