'use client';

import { SearchIcon } from "@/components/svg/SearchIcon";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';

import s from './search.module.css'

export const useDebouncedValue = <T, >(value: T, delay = 400) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
};

export const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initial = searchParams.get('search') ?? '';
  const [query, setQuery] = useState(initial);

  const debouncedQuery = useDebouncedValue(query, 200);
  const [isPending, startTransition] = useTransition();

  const baseParams = useMemo(() => new URLSearchParams(searchParams.toString()), [pathname]);

  useEffect(() => {
    const params = new URLSearchParams(baseParams.toString());

    if (debouncedQuery) params.set('search', debouncedQuery);
    else params.delete('search');

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, [debouncedQuery, pathname]);

  return (
    <label className={s.search}>
      <SearchIcon/>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search game"
        className={s.searchInput}
        aria-busy={isPending}
      />
    </label>
  );
};