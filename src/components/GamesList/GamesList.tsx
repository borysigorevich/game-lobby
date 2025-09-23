import React, { ReactNode } from 'react';

import s from './games-list.module.css'

interface GamesListProps {
  content: ReactNode
}

export const GamesList = ({ content }: GamesListProps) => {
  return (
    <ul className={s.gamesList}>
      {content}
    </ul>
  );
};