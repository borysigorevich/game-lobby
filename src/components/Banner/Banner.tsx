import Image from 'next/image'
import React from 'react';

import s from './banner.module.css'

export const Banner = () => {
  return (
    <div className={s.banner}>
      <Image
        src={'/banner.png'}
        width={1600}
        height={273}
        alt="Banner"
        objectFit={'cover'}
        className={s.bannerImage}
      />
      <div
        className={s.bannerOverlay}
      />
    </div>
  );
};