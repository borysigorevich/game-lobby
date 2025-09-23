import { GetGamesResponse } from "@/components/GameCard/api/get-games";
import { GameCard } from "@/components/GameCard/GameCard";
import React from 'react';
import s from './games-list.module.css'

interface GamesListProps {
  games?: GetGamesResponse
}

export const GamesList = ({ games }: GamesListProps) => {
  return (
    <div className={s.gamesList}>
      {games?.count === 0 ? (
        <p>No games available</p>
      ) : (
        <ul>
          {games?.items.map((game) => {
            return <GameCard
              game={game} key={game.id}
            />
          })}
        </ul>
      )}
    </div>
  );
};