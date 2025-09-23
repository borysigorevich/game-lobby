'use client'
import { EventGame } from "@/components/GameEvents/GameEvents";
import { useGameEvents } from "@/hooks/useGameEvents";
import { GameEvent } from "@/services/socket";
import React, { createContext, PropsWithChildren } from 'react';

const Context = createContext<{
  events: GameEvent[]
}>({ events: [] });

interface EventProviderProps {
  games?: EventGame[]
}

export const useEventContext = () => React.useContext(Context);

export const EventProvider = ({ games, children }: PropsWithChildren<EventProviderProps>) => {

  const events = useGameEvents({ games })

  return (
    <Context.Provider value={{ events }}>
      {children}
    </Context.Provider>
  );
};