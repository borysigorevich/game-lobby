import Image from 'next/image'
import React from 'react';

import s from './grid-overlay.module.css'

export const GridOverlay = () => {
  return (
    <>
      <Image
        fill
        src={'/grid.png'}
        alt="Grid Overlay"
        className={s.gridOverlayImage}
      />

      <div className={s.gridOverlay}/>

    </>
  );
};