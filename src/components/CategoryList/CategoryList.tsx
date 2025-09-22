import { getConfig } from "@/components/CategoryList/api/get-config";
import Link from "next/link";
import { CSSProperties } from 'react';

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
}

export const CategoryList = async ({ className, style }: CategoryListProps) => {
  const { data: categories, error } = await getConfig()

  return (
    <div className={className} style={style}>
      <h2>Game Categories</h2>
      {error ? (
        <p>Error loading categories</p>
      ) : (
        <ul>
          {categories?.menu.lobby.items.map((category) => (
            <li key={category.id}>
              <Link href={category.name.en} key={category.id}>
                {category.name.en}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
