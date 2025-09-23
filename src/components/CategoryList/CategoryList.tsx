import { getConfig } from "@/components/CategoryList/api/get-config";
import { ActiveLink } from "@/components/CategoryList/components/ActiveLink/ActiveLink.client";
import Link from "next/link";
import { CSSProperties } from 'react';

import s from './category-list.module.css'

interface CategoryListProps {
  className?: string;
  style?: CSSProperties;
}

export interface Category {
  id: string;
  name: {
    en: string;
    pt: string;
  };
  type: string;
  links: {
    getPage: Record<string, string>
  }
}

export const CategoryList = async ({ className, style }: CategoryListProps) => {
  const { data: categories, error } = await getConfig()

  return (
    <div className={`${s.categoryList} ${className}`} style={style}>
      <h3 className={s.categoryListTitle}>Categories</h3>
      {error ? (
        <p>Error loading categories</p>
      ) : (
        <ul className={s.categoryListItems}>
          {categories?.menu.lobby.items.map((category) => (
            <li key={category.id} className={s.categoryListItem}>
              <ActiveLink href={category.name.en === 'Lobby' ? '/' : category.name.en} key={category.id}>
                {category.name.en}
              </ActiveLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
