'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useOptimistic, useTransition } from 'react';

export const Search = () => {

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  const query = searchParams.get('search') || '';

  const [optimisticQuery, setOptimisticQuery] = useOptimistic(query);

  const onChange = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newSearchParams.set('search', value);
    } else {
      newSearchParams.delete('search');
    }

    startTransition(() => {
      router.push(`${pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
      setOptimisticQuery(value);
    });
  };

  return (
    <input
      type="text"
      value={optimisticQuery}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search..."
      className="border p-2 rounded"
    />
  );
};