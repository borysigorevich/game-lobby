'use client'
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from 'react';

import s from './active-link.module.css'


export const ActiveLink = (props: PropsWithChildren<LinkProps & { className?: string }>) => {

  const pathname = usePathname()

  console.log({ pathname, href: props.href })

  const decodedPathname = decodeURIComponent(pathname || '')

  const isActive = decodedPathname === props.href || (typeof props.href === 'string' && decodedPathname === '/' + props.href)

  return (
    <Link {...props}
          className={`${s.activeLink} ${props.className || ''} ${isActive ? s.active : ''}`}
    />
  );
};