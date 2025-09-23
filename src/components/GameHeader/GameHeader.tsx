import { Search } from "@/components/GameCard/components/Search/Search.client";
import React from 'react';
import s from './game-header.module.css'

interface GameHeaderProps {
  title: string;
  totalGames: number;
}

export const GameHeader = ({ totalGames, title }: GameHeaderProps) => {
  return (
    <div className={s.gameHeader}>
      <h3 className={s.gameHeaderTitle}>{title}</h3>
      <span className={s.gameHeaderTotal}>{totalGames} games found</span>
      <Search/>
    </div>
  );
};