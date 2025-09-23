import React, { PropsWithChildren } from 'react';

import s from './sidebar.module.css'

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <aside className={s.sidebar}>
      {children}
    </aside>
  );
};