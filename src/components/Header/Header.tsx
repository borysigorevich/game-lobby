import Image from 'next/image'
import React from 'react';

import s from './header.module.css'

export const Header = () => {
  return (
    <header className={s.header}>
      <Image
        src={'/logo.png'}
        alt="Logo"
        width={187}
        height={25}
        objectFit={'cover'}
      />
    </header>
  );
};